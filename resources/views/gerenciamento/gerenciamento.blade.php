<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Gerenciamento</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>   
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    </head>
    <body>
        @include('partials.header')
        <div class="container text-center mt-3">
            <h1 class="display-3 responsive-title">Gerenciamento</h1>
        </div>
        <div class="table-responsive">
            <table class="table">
            <thead class="table-light">
            <tr>
                <th scope="col">Nome</th>
                <th scope="col">Email</th>
                <th scope="col">Telefone</th>
                <th scope="col">Celular</th>
                <th scope="col">Data Nascimento</th>
                <th scope="col">Profissão</th>
                <th scope="col"> Número possui WhatsApp?</th>
                <th scope="col"> Enviar notificação por Email?</th>
                <th scope="col"> Enviar notificação por SMS?</th>
                <th scope="col">Ações</th>
            </tr>
            </thead>
            <tbody class="table-group-divider">
            </tbody>
            </table>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Remover contato</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                 Deseja deletar esse contato?
                </div>
                <div class="modal-footer">
                <button type="button" id="excluir" class="btn btn-outline-danger">Remover</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                </div>
            </div>
            </div>
        </div>
        <script src="{{ asset('js/gerenciamento.js') }}"></script> 
    </body>
</html>