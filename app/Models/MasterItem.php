<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MasterItem extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'master_item';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    protected $primaryKey = 'id';

    protected $dates = [

    ];

    public $fillable = [
        'id',
        'item_name',
        'item_description',
        'user_id'
    ];

}
