<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Editar cadastro</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</head>
<body>
    @include('partials.header')
    <div class="container text-center mt-3">
        <h1 class="display-3 responsive-title">Editar contato</h1>
    </div>
    <div class="container">
        <div class="content">
            <form class="row g-3" method="put">
                @csrf
                <input type="hidden" name="_method" value="PUT">
                <x-input divclass="col-md-6" type="text" nome="nome" class="form-control" label="Nome completo" id="inputNome" placeholder="Digite seu nome completo" value="" />
                <x-input divclass="col-md-6" type="date" nome="dataNascimento" class="form-control" label="Data de nascimento" id="inputDataNascimento" placeholder="Digite sua data de nascimento" value="" />
                <x-input divclass="col-md-6" type="email" nome="email" class="form-control" label="E-mail" id="inputEmail" placeholder="Digite seu e-mail" value="" />
                <x-input divclass="col-md-6" type="text" nome="profissao" class="form-control" label="Profissão" id="inputProfissao" placeholder="Digite sua profissão" value="" />
                <x-input divclass="col-md-6" type="tel" nome="telefone" class="form-control" label="Telefone para contato" id="inputTelefone" placeholder="(xx)-xxxx-xxxx" value="" />
                <x-input divclass="col-md-6" type="tel" nome="celular" class="form-control" label="Celular para contato" id="inputCelular" placeholder="(xx)-xxxxx-xxxx" value="" />
            </form>
            <div class="container d-flex justify-content-center">
                <button type="button" class="btn btn-primary" id="botao">Atualizar</button>
            </div>
        </div>
    </div>
    <script src="{{ asset('js/editarcontato.js') }}"></script>
</body>
</html>

