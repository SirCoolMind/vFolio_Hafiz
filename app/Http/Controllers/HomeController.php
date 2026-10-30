<?php

namespace App\Http\Controllers;

use App\Mail\ContactFormEmail;
use App\Models\ContactForm;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\View\View;

class HomeController extends Controller
{
    private string $ownerEmail = 'hafizcoolman@gmail.com';

    /**
     * Per-route <title> and meta description. The React app renders the page body,
     * so this is what search engines and link previews see before any JS runs.
     */
    private const PAGES = [
        'home' => [
            'title' => 'Muhammad Hafiz Ruslan | AI-Assisted Full-Stack Developer',
            'description' => 'Muhammad Hafiz Ruslan, AI-assisted full-stack developer and software engineer in Malaysia. Laravel, Vue.js and Node.js systems for government and enterprise clients.',
        ],
        'about' => [
            'title' => 'About Muhammad Hafiz Ruslan | Experience, Education & Skills',
            'description' => 'Senior PHP and Lead Programmer with 5+ years building Laravel, Vue.js and Node.js systems in Malaysia. First Class Computer Science graduate from UiTM.',
        ],
        'work' => [
            'title' => 'Projects by Muhammad Hafiz Ruslan | PureCut & NoteRecall',
            'description' => 'Side projects by Muhammad Hafiz Ruslan: PureCut, an in-browser AI background remover, and NoteRecall, a local-first meeting transcriber for Malay and English.',
        ],
        'contact' => [
            'title' => 'Contact Muhammad Hafiz Ruslan | Hire a Full-Stack Developer',
            'description' => 'Hiring for a full-stack or Laravel role, or have a project in mind? Get in touch with Muhammad Hafiz Ruslan, software engineer in Kuala Lumpur, Malaysia.',
        ],
        'privacy' => [
            'title' => 'Privacy Policy | Muhammad Hafiz Ruslan',
            'description' => 'How vfolio.hafizr.com handles contact form messages, visit logs, cookies and Microsoft Clarity data.',
        ],
        'terms' => [
            'title' => 'Terms of Service | Muhammad Hafiz Ruslan',
            'description' => 'The terms for using vfolio.hafizr.com, including its content, contact form and external links.',
        ],
    ];

    /**
     * Render the portfolio SPA shell and log the visit.
     */
    public function index(Request $request): View
    {
        visitor()->visit();

        $routeName = $request->route()->getName();

        return view('vfolio.index', [
            'page' => self::PAGES[$routeName],
            'canonical' => route($routeName),
        ]);
    }

    /**
     * XML sitemap listing every public page.
     */
    public function sitemap(): Response
    {
        return response()
            ->view('vfolio.sitemap', ['urls' => array_map(fn ($name) => route($name), array_keys(self::PAGES))])
            ->header('Content-Type', 'application/xml');
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
