<?php

namespace Tests\Feature;

use App\Mail\Transport\GmailTransport;
use Illuminate\Http\Client\Request;
use Illuminate\Http\Client\RequestException;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class GmailMailerTest extends TestCase
{
    private const TOKEN_URL = 'https://oauth2.googleapis.com/token';

    private const SEND_URL = 'https://gmail.googleapis.com/gmail/v1/users/me/messages/send';

    protected function setUp(): void
    {
        parent::setUp();

        config([
            'mail.from.address' => 'owner@example.com',
            'services.gmail' => [
                'client_id' => 'client-id',
                'client_secret' => 'client-secret',
                'refresh_token' => 'refresh-token',
            ],
        ]);
    }

    public function test_gmail_mailer_uses_the_https_api_transport(): void
    {
        $transport = Mail::mailer('gmail')->getSymfonyTransport();

        $this->assertInstanceOf(GmailTransport::class, $transport);
        $this->assertSame('gmail+api://gmail.googleapis.com', (string) $transport);
    }

    public function test_it_exchanges_the_refresh_token_and_posts_the_encoded_message(): void
    {
        $this->fakeGoogle();

        $sent = Mail::mailer('gmail')->raw('Hello there', fn ($message) => $message->to('visitor@example.com')->subject('Greetings'));

        $this->assertSame('gmail-message-id', $sent->getMessageId());

        Http::assertSent(fn (Request $request) => $request->url() === self::TOKEN_URL
            && str_contains($request->body(), 'grant_type=refresh_token')
            && str_contains($request->body(), 'refresh_token=refresh-token'));

        Http::assertSent(function (Request $request) {
            if ($request->url() !== self::SEND_URL) {
                return false;
            }

            $raw = base64_decode(strtr($request['raw'], '-_', '+/'));

            return $request->hasHeader('Authorization', 'Bearer access-token')
                && str_contains($raw, 'To: visitor@example.com')
                && str_contains($raw, 'Subject: Greetings');
        });
    }

    public function test_a_rejected_refresh_token_fails_without_calling_gmail(): void
    {
        Http::fake([self::TOKEN_URL => Http::response(['error' => 'invalid_grant'], 400)]);

        try {
            Mail::mailer('gmail')->raw('Hello', fn ($message) => $message->to('visitor@example.com'));
            $this->fail('Expected the token request to throw.');
        } catch (RequestException $exception) {
            $this->assertStringContainsString('invalid_grant', $exception->getMessage());
        }

        Http::assertSentCount(1);
    }

    public function test_test_command_sends_to_the_from_address_by_default(): void
    {
        $this->fakeGoogle();

        $this->artisan('gmail:test')
            ->expectsOutput('Sent to owner@example.com.')
            ->assertSuccessful();

        Http::assertSent(fn (Request $request) => $request->url() === self::SEND_URL
            && str_contains(base64_decode(strtr($request['raw'], '-_', '+/')), 'To: owner@example.com'));
    }

    public function test_authorize_command_requests_send_access_and_rejects_an_address_without_a_code(): void
    {
        $this->artisan('gmail:authorize')
            ->expectsQuestion('Google OAuth client ID', 'client-id')
            ->expectsQuestion('Google OAuth client secret', 'client-secret')
            ->expectsOutputToContain('scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fgmail.send')
            ->expectsQuestion('Paste the full address from the browser bar', 'http://localhost/?error=access_denied')
            ->assertFailed();
    }

    private function fakeGoogle(): void
    {
        Http::fake([
            self::TOKEN_URL => Http::response(['access_token' => 'access-token', 'expires_in' => 3599, 'token_type' => 'Bearer']),
            self::SEND_URL => Http::response(['id' => 'gmail-message-id']),
        ]);
    }
}
