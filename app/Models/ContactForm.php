<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactForm extends Model
{
    protected $table = 'contact_form';

    protected $fillable = [
        'contact_email',
        'contact_name',
        'contact_subject',
        'contact_message',
        'contact_combat_spam',
        'contact_is_bot',
    ];
}
