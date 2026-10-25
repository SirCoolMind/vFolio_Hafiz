<?php

namespace App\Http\Controllers;

use App\Mail\ContactFormEmail;
use App\Models\ContactForm;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\View\View;

class HomeController extends Controller
{
    private string $ownerEmail = 'hafizcoolman@gmail.com';

    /**
     * Render the portfolio SPA shell and log the visit.
     */
    public function index(Request $request): View
    {
        visitor()->visit();

        return view('vfolio.index');
    }

    /**
     * Submit email from user to owner.
     */
    public function sendEmail(Request $request): JsonResponse
    {
        try {
            if (! filter_var($request->input('contact_email'), FILTER_VALIDATE_EMAIL)) {
                throw new \Exception('Email entered is not valid');
            }

            $data = [
                'contact_email' => $request->input('contact_email'),
                'contact_name' => $request->input('contact_name'),
                'contact_subject' => $request->input('contact_subject'),
                'contact_message' => $request->input('contact_message'),
                'contact_combat_spam' => $request->input('combat_spam'),
                'contact_is_bot' => $request->input('combat_spam') != '19',
            ];

            ContactForm::create($data);

            if ($request->input('combat_spam') != '19') {
                return response()->json(['title' => 'Berjaya', 'status' => 'success', 'message' => 'Berjaya', 'detail' => 'berjaya']);
            }

            try {
                Mail::to($this->ownerEmail)->send(new ContactFormEmail($data));
            } catch (\Throwable $mailEx) {
                Log::warning('Mail delivery skipped/failed: '.$mailEx->getMessage());
            }
        } catch (\Throwable $th) {
            return response()->json(['title' => 'Gagal', 'status' => 'error', 'detail' => $th->getMessage()], 404);
        }

        return response()->json(['title' => 'Berjaya', 'status' => 'success', 'message' => 'Berjaya', 'detail' => 'berjaya']);
    }
}
