<?php
 namespace App\Models;

 use Illuminate\Database\Eloquent\Model;

class ContatoModel extends Model
{
    protected $table = 'contato';

    protected $fillable = [
        'nome',
        'email',
        'telefone',
        'dataNascimento',
        'celular',
        'profissao',
    ];

    // Optionally, define the primary key if it's not 'id'
    protected $primaryKey = 'id';

    // If you do not use the timestamps (created_at, updated_at), set this to false
    public $timestamps = false;
}
