<?php
 
 namespace App\Http\Controllers\Api;

 use App\Http\Controllers\Controller;
 use App\Models\ContatoModel; // Ensure this import statement is correct
 use Illuminate\Http\Request;
 
 class ContatosController extends Controller 
{
    public function index()
    {
        $contatos = ContatoModel::all();
        if ($contatos) {
            return response()->json(['status' => 'sucesso', 'message' => 'Contatos encontrados com sucesso', 'data' => $contatos], 200);
        } else {
            return response()->json(['status' => 'erro', 'message' => 'Não foi possível encontrar contatos.'], 404);
        }
    }

    public function store(\App\Http\Requests\ContatoFormRequest $request)
    {   
        try {
            $request->validate([
                'nome' => 'required|string|max:255',
                'email' => 'required|email',
                'telefone' => 'required|string',
                'dataNascimento' => 'required|string',
                'celular' => 'required|string',
                'profissao' => 'required|string',
            ]);

            $criando = ContatoModel::create($request->all());

            if ($criando) {
                return response()->json(['status' => 'sucesso', 'message' => 'Contato criado com sucesso', 'data' => $criando], 201);
            } else {
                return response()->json(['status' => 'erro', 'message' => 'Não foi possível criar esse contato.'], 400);
            }
        } catch (\Exception $e) {
            return response()->json(['status' => 'erro', 'message' => $e->getMessage()], 500);
        }
    }

    public function show($id)
    {
        $contato = ContatoModel::where("id", $id)->first();
        if ($contato) {
            return response()->json(['status' => 'sucesso', 'message' => 'Contato encontrado com sucesso', 'data' => $contato], 200);
        } else {
            return response()->json(['status' => 'erro', 'message' => 'Não foi possível encontrar esse contato.'], 404);
        }
    }
    

    public function update(\App\Http\Requests\ContatoFormRequest $request, ContatoModel $contatos)
    { 
        $contatos->fill($request->all());
        $contats->save();
        if($contatos){
            return response()->json(['status' => 'sucesso', 'message' => 'Contato atualizado com sucesso', 'data' => $contato], 200);
        }
        else{
            return response()->json(['status' => 'erro', 'message' => 'Não foi possível atualizar esse contato.'], 400);
        }      
    }

    public function destroy($id)
    {
        $contatos = ContatoModel::destroy($id);
        if ($contatos) {
            return response()->json([], 204);
        } else {
            return response()->json(['status' => 'erro', 'message' => 'Não foi possível deletar esse contato.'], 400);
        }
    }

}
