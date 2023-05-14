<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MasterCategory extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'master_category';

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
        'category_name',
        'category_description',
        'ordering',
        'user_id'
    ];

}
