<?php

namespace App\Providers;

use App\View\Composers\NavbarComposer;
use App\View\Composers\BudgetTrackerComposer;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class ViewServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        /* Example
            // Using class based composers...
            View::composer('profile', ProfileComposer::class);

            // Using closure based composers...
            View::composer('dashboard', function ($view) {
                //
            });
        */

        View::composer('*', NavbarComposer::class);
        View::composer('budgettracker.dashboard.simple', BudgetTrackerComposer::class);
    }
}
