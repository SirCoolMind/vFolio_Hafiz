<?php

namespace App\Http\Controllers;

use App\Mail\ContactFormEmail;
use App\Models\ContactForm;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{

    public $ownerEmail;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->ownerEmail = "hafizcoolman@gmail.com";
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $request)
    {
        // dd($request->visitor()->browser());

        //Store Logs
        visitor()->visit();
        
        return view('vfolio.index');
    }

    /**
     * Submit email from user to owner
     *
     * @return string success|error
     */
    public function sendEmail(Request $request)
    {
        // dd($request->all());
        try {
            // DB::beginTransaction();

            if(!filter_var($request->input('contact_email'), FILTER_VALIDATE_EMAIL)){
                throw new \Exception('Email entered is not valid');
            }

            $data = [
                'contact_email' => $request->input('contact_email'),
                'contact_name' => $request->input('contact_name'),
                'contact_subject' => $request->input('contact_subject'),
                'contact_message' => $request->input('contact_message'),
                'contact_combat_spam' => $request->input('combat_spam'),
                'contact_is_bot' => $request->input('combat_spam') != '19' ? true : false, 
            ];

            ContactForm::create($data);
            
            if($request->input('combat_spam') != '19'){
                return response()->json(['title' => 'Berjaya', 'status' => 'success', 'message' => "Berjaya", 'detail' => "berjaya"]);
            }

            \Mail::to($this->ownerEmail)->send(new ContactFormEmail($data));

            // DB::commit();
        } catch (\Throwable $th) {
            // DB::rollBack();
            return response()->json(['title' => 'Gagal', 'status' => 'error', 'detail' => $th->getMessage()], 404);
        }

        return response()->json(['title' => 'Berjaya', 'status' => 'success', 'message' => "Berjaya", 'detail' => "berjaya"]);
    }
}
