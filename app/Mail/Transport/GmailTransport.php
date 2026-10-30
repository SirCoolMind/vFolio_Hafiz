<?php

namespace App\Mail\Transport;

use App\Services\GmailClient;
use Symfony\Component\Mailer\SentMessage;
use Symfony\Component\Mailer\Transport\AbstractTransport;

/**
 * Laravel mailer driver for the Gmail API. Gmail reads recipients from the message headers,
 * and Symfony strips Bcc before sending, so Bcc recipients are not delivered.
 */
class GmailTransport extends AbstractTransport
{
    public function __construct(private GmailClient $gmail)
    {
        parent::__construct();
    }

    protected function doSend(SentMessage $message): void
    {
        $message->setMessageId($this->gmail->send($message->toString()));
    }

    public function __toString(): string
    {
        return 'gmail+api://gmail.googleapis.com';
    }
}
