<?php

namespace App\Console\Commands;

use App\Models\MasterCategory;
use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class AutoCreateCategory extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:autocreatecategory {user=1}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Auto Create Category for certain user';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Log::info('Auto Create Category: STARTED');

        $user = User::find($this->argument('user'));
        Log::info('Auto Create Category: User Name: '.$user?->name);
        $arrayOfCategory = array(
            array("name" => "Income","desc" => "Income"),
            array("name" => "Transportation", "desc" => "Transportation"),
            array("name" => "Personal Development", "desc" => "Personal Development"),
            array("name" => "Healthcare", "desc" => "Healthcare"),
            array("name" => "Entertainment", "desc" => "Entertainment"),
            array("name" => "Housing", "desc" => "Housing"),
            array("name" => "Food", "desc" => "Food"),
            array("name" => "Family", "desc" => "Family"),
            array("name" => "Insurances", "desc" => "Insurances"),
            array("name" => "Gifts", "desc" => "Gifts"),
            array("name" => "Bills", "desc" => "Bills"),
            array("name" => "Personal Care", "desc" => "Personal Care"),
            array("name" => "Pets", "desc" => "Pets"),
            array("name" => "Financial Goals", "desc" => "Financial Goals")
        );

        foreach($arrayOfCategory as $index=>$category){
            Log::info('Auto Create Category: Create '.$category["name"]);
            $newCategory = MasterCategory::firstOrNew(['category_name'=>$category["name"], 'user_id'=> $user->id]);
            $newCategory->category_description = $category["desc"];
            $newCategory->ordering = $index+1;
            $newCategory->save();
        }
        
        Log::info('Auto Create Category: ENDED');

        return Command::SUCCESS;
    }
}
