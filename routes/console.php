<?php

use App\Services\GmailClient;
use Google\Auth\OAuth2;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Artisan::command('gmail:authorize', function () {
    $oauth = new OAuth2([
        'clientId' => $this->ask('Google OAuth client ID'),
        'clientSecret' => $this->secret('Google OAuth client secret'),
        'authorizationUri' => 'https://accounts.google.com/o/oauth2/v2/auth',
        'tokenCredentialUri' => 'https://oauth2.googleapis.com/token',
        'redirectUri' => 'http://localhost',
        'scope' => GmailClient::SEND_SCOPE,
        'state' => Str::random(32),
    ]);

    $this->line('Open this URL and approve access. The page you land on may not load, which is fine:');
    $this->line((string) $oauth->buildFullAuthorizationUri(['prompt' => 'consent']));

    parse_str((string) parse_url(trim($this->ask('Paste the full address from the browser bar')), PHP_URL_QUERY), $query);

    if (($query['state'] ?? null) !== $oauth->getState() || empty($query['code'])) {
        $this->fail('That address does not contain the expected authorization code.');
    }

    $oauth->setCode($query['code']);

    $this->info('GMAIL_REFRESH_TOKEN='.$oauth->fetchAuthToken()['refresh_token']);
})->purpose('Get the Gmail API refresh token');

Artisan::command('gmail:test {to? : Recipient, defaults to the From address}', function (?string $to = null) {
    $to ??= config('mail.from.address');

    Mail::mailer('gmail')->raw('Sent by php artisan gmail:test.', fn ($message) => $message->to($to)->subject('vFolio: Gmail API test'));

    $this->info("Sent to {$to}.");
})->purpose('Send a test email through the Gmail API, which also keeps the refresh token active');
