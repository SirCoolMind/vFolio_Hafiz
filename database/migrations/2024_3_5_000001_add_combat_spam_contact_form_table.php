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
        Schema::table('contact_form', function (Blueprint $table) {
            $table->string('contact_combat_spam',255)->nullable();
            $table->boolean('contact_is_bot')->default(1);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('contact_form', function (Blueprint $table) {
            $table->dropColumn('contact_combat_spam');
            $table->dropColumn('contact_is_bot');
        });
    }
};
