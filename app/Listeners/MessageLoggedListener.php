<?php

namespace App\Listeners;

use Illuminate\Log\Events\MessageLogged;
use Symfony\Component\Console\Output\ConsoleOutput;

class MessageLoggedListener
{
    /**
     * Echo log messages to the console when running artisan commands.
     * Auto-discovered by Laravel through the type-hinted handle() method.
     */
    public function handle(MessageLogged $event): void
    {
        if (app()->runningInConsole()) {
            $output = new ConsoleOutput();
            $output->writeln("<error>{$event->message}</error>");
        }
    }
}
