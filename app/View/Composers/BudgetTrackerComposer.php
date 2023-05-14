<?php

namespace App\View\Composers;

use App\Helpers\Helper;
use App\Models\BudgetTracker;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class BudgetTrackerComposer
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
        $date = Carbon::now()->endOfMonth();
        $month      =   $date->format('m');
        $monthShort =   $date->format('M');
        $year       =   $date->format('Y');
        $lastDayOfMonth = $date->format('d');
        $eachDayOfMonth = [];
        $moneySpentOnDayOfMonth = [];

        $budgetTrackerQuery = BudgetTracker::where('user_id',Auth::user()->id)->where('year_spent',$year)
                                ->whereMonth('date_spent', $month);
                                // dd($budgetTrackerQuery->whereDay('date_spent',4)->sum('money_spent'));

        for($i = 1; $i<= $lastDayOfMonth;$i++){
            $eachDayOfMonth[] = $i."/".$month;
            $query = clone $budgetTrackerQuery;
            $sum = $query->whereDay('date_spent',$i)->sum('money_spent');
            $moneySpentOnDayOfMonth[] = number_format($sum/100,2,'.',"");

        }

        $eachDayOfMonth = '["'.implode('","',$eachDayOfMonth).'"]';
        $moneySpentOnDayOfMonth = '['.implode(',',$moneySpentOnDayOfMonth).']';
        $labelDataset = "Money Spent in ".$monthShort." (RM)";
        
        $view
        ->with('labelDataset', $labelDataset)
        ->with('eachDayOfMonth', $eachDayOfMonth)
        ->with('moneySpentOnDayOfMonth', $moneySpentOnDayOfMonth);
    }
}
