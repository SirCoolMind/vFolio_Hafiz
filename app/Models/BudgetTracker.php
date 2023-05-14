<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\MasterItem;
use App\Models\MasterCategory;

class BudgetTracker extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'budget_tracker';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    protected $primaryKey = 'id';

    protected $dates = [
        'date_spent'
    ];

    public $fillable = [
        'id',
        'user_id',
        'week_spent',
        'year_spent',
        'date_spent',
        'money_spent',
        'master_item_id',
        'master_category_id',
        'notes',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function masterItem()
    {
        return $this->belongsTo(MasterItem::class, 'master_item_id', 'id');
    }

    public function masterCategory()
    {
        return $this->belongsTo(MasterCategory::class, 'master_category_id', 'id');
    }

    public function getMoneySpent()
    {
        return number_format($this->money_spent/100,2);
    }


}
