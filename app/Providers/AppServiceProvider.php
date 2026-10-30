<?php

namespace App\Providers;

use App\Mail\Transport\GmailTransport;
use App\Services\GmailClient;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Mail::extend('gmail', function (array $config) {
            return new GmailTransport(new GmailClient(
                (string) config('services.gmail.client_id'),
                (string) config('services.gmail.client_secret'),
                (string) config('services.gmail.refresh_token'),
                (int) ($config['timeout'] ?? 10),
            ));
        });
    }
}
