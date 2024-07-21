<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Cadastro</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <link rel="stylesheet"  href="{{ asset('css/cadastro.css') }}">
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        
    </head>
    <body>
    @include('partials.header')
    <h1 class="display-3">Cadastro</h1>
    <div class="container">
        <div class="content">
            <form class="row g-3" method="post">
                <x-input divclass="col-md-6" type="text" nome="nome" class="form-control" label="Nome completo" id="inputNome" placeholder="Digite seu nome completo" value=""/>
                <x-input divclass="col-md-6" type="date" nome="dataNascimento" class="form-control" label="Data de nascimento" id="inputDataNascimento" placeholder="Digite sua data de nascimento" value=""/>
                <x-input divclass="col-md-6" type="email" nome="email" class="form-control" label="E-mail" id="inputEmail" placeholder="Digite seu e-mail" value=""/>
                <x-input divclass="col-md-6" type="text" nome="profissao" class="form-control" label="Profissão" id="inputProfissao" placeholder="Digite sua profissão" value=""/>
                <x-input divclass="col-md-6" type="tel" nome="telefone" class="form-control" label="Telefone para contato" id="inputTelefone" placeholder="(xx)xxxx-xxxx" value=""/>
                <x-input divclass="col-md-6" type="tel" nome="celular" class="form-control" label="Celular para contato" id="inputCelular" placeholder="(xx)xxxxx-xxxx" value=""/>
            </form>
        </div>
    </div>
    <div class="mt-5 permissoes">
        <div class="row">
            <div class="col">
                <x-input divclass="form-check" type="checkbox" class="form-check-input" nome="numero_Whatsapp" label="Número de celular possui WhatsApp" id="inputNotificacao" value="" placeholder=""/>
            </div>
            <div class="col">
                <x-input divclass="form-check" type="checkbox" class="form-check-input" nome="notificacao-SMS" label="Enviar notificações por SMS" id="inputNotificacaoSMS" value="" placeholder=""/>
            </div>
        </div> 
        <div class="col">
            <x-input divclass="form-check" type="checkbox" class="form-check-input" nome="notificacao-Email" label="Enviar notificações por Email" id="inputNotificacaoEmail" value="" placeholder=""/>   
        </div>    
    </div>  
        <div>
            <button type="submit" class="btn btn-primary mt-4 botao" id="botao">Cadastrar</button>
        </div>  
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        <script src="{{ asset('js/cadastro.js') }}"></script>
    </body>
</html>
