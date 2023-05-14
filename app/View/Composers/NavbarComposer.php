<?php

namespace App\View\Composers;

use App\Helpers\Helper;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class NavbarComposer
{

    public function __construct()
    {

    }

    /**
     * Bind data to the view.
     *
     * @param  \Illuminate\View\View  $view
     * @return void
     */
    public function compose(View $view)
    {
        $currentUserName = Helper::ucWords(Auth::user()?->name ?? "No Login");
        $currentUserRoleName = Helper::ucWords(implode(", ",Auth::user()?->getRoleNames()->toArray() ?? array()));
        $view
        ->with('currentUserName', $currentUserName)
        ->with('currentUserRoleName', $currentUserRoleName);
    }
}
