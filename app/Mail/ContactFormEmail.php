<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactFormEmail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public array $details)
    {
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'vFolio Hafiz: '.($this->details['contact_subject'] ?? 'empty Subject'),
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.contactFormEmail',
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
