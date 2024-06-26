<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('current_address', function (Blueprint $table) {
            $table->id('cur_address_id');
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->string('cur_house_number')->nullable();
            $table->string('cur_street')->nullable();
            $table->string('cur_barangay')->nullable();
            $table->string('cur_city')->nullable();
            $table->string('cur_province')->nullable();
            $table->string('cur_region')->nullable();
            $table->string('cur_country')->nullable();
            $table->string('cur_zip_code')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('current_address');
    }
};
