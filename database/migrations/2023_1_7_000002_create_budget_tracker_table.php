<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('budget_tracker', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('week_spent');
            $table->integer('year_spent');
            $table->dateTime('date_spent');
            $table->float('money_spent',8,2);
            $table->foreignId('master_item_id')->constrained('master_item')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('master_category_id')->constrained('master_category')->onUpdate('cascade')->onDelete('cascade');
            $table->text('notes');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('budget_tracker');
    }
};
