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
        Schema::table('master_item', function (Blueprint $table) {
            $table->foreignId('user_id')->after('id')->constrained('users')->onUpdate('cascade')->onDelete('cascade');
        });
        Schema::table('master_category', function (Blueprint $table) {
            $table->foreignId('user_id')->after('id')->constrained('users')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::withoutForeignKeyConstraints(function () {
            Schema::table('master_item', function (Blueprint $table) {
                $table->dropForeign(['user_id']);
                $table->dropColumn('user_id');
            });
            Schema::table('master_category', function (Blueprint $table) {
                $table->dropForeign(['user_id']);
                $table->dropColumn('user_id');
            });
        });
    }
};
