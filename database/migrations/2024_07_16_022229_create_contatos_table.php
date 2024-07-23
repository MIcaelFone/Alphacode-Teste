<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContatosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contatos', function (Blueprint $table) {
            $table->id();
            $table->string('nome')->unique();
            $table->string('email')->unique();
            $table->string('telefone');
            $table->date('dataNascimento');
            $table->string('celular')->unique();
            $table->string('profissao');
            $table->boolean('celularPossuiWhatsapp')->default(false);
            $table->boolean('enviarNotificacaoEmail')->default(false);
            $table->boolean('enviarNotificacaoSms')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contatos');
    }
}
