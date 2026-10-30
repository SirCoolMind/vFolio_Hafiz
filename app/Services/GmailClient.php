<?php

namespace App\Services;

use Google\Auth\Credentials\UserRefreshCredentials;
use Illuminate\Support\Facades\Http;
use Psr\Http\Message\RequestInterface;

/**
 * Sends email as the authorized Google account over HTTPS (the droplet's SMTP ports are blocked).
 * Google's auth library exchanges the long-lived refresh token for a short-lived access token.
 */
class GmailClient
{
    public const SEND_SCOPE = 'https://www.googleapis.com/auth/gmail.send';

    private const SEND_URL = 'https://gmail.googleapis.com/gmail/v1/users/me/messages/send';

    public function __construct(
        private string $clientId,
        private string $clientSecret,
        private string $refreshToken,
        private int $timeout = 10,
    ) {}

    /**
     * Send an RFC 2822 message and return its Gmail message id.
     */
    public function send(string $rawMessage): string
    {
        return Http::withToken($this->accessToken())
            ->timeout($this->timeout)
            ->post(self::SEND_URL, ['raw' => rtrim(strtr(base64_encode($rawMessage), '+/', '-_'), '=')])
            ->throw()
            ->json('id');
    }

    private function accessToken(): string
    {
        $credentials = new UserRefreshCredentials(self::SEND_SCOPE, [
            'client_id' => $this->clientId,
            'client_secret' => $this->clientSecret,
            'refresh_token' => $this->refreshToken,
        ]);

        return $credentials->fetchAuthToken(fn (RequestInterface $request) => Http::timeout($this->timeout)
            ->withBody((string) $request->getBody(), $request->getHeaderLine('Content-Type'))
            ->post((string) $request->getUri())
            ->throw()
            ->toPsrResponse()
        )['access_token'];
    }
}
