function buscarContatos() {
    $.ajax({
        url: 'http://localhost:8000/api/contatos',
        type: 'GET',
        success: function(contato) {
            let rows = '';
            if(contato.data.length > 0){
                for (let i = 0; i < contato.data.length; i++) {
                    let dataNascimento = contato.data[i].dataNascimento.split('-').reverse().join('/');
                    let celularPossuiWhatsapp = contato.data[i].celularPossuiWhatsapp ? 'Sim' : 'Não';
                    let enviarNotificacaoEmail = contato.data[i].enviarNotificacaoEmail ? 'Sim' : 'Não';
                    let enviarNotificacaoSms = contato.data[i].enviarNotificacaoSms ? 'Sim' : 'Não';
                    rows +=
                     `<tr>
                        <td>${contato.data[i].nome}</td>
                        <td>${contato.data[i].email}</td>
                        <td>${contato.data[i].telefone}</td>
                        <td>${contato.data[i].celular}</td>
                        <td>${dataNascimento}</td>
                        <td>${contato.data[i].profissao}</td>
                        <td>${celularPossuiWhatsapp}</td>
                        <td>${enviarNotificacaoEmail}</td>
                        <td>${enviarNotificacaoSms}</td>
                        <td>
                        <img src="../imagens/editar.png" alt="Editar" style="width: 20px; height: 20px;" data-id="${contato.data[i].id}" class="editar">
                        <img src="../imagens/excluir.png" alt="Excluir" style="width: 20px; height: 20px;" data-id="${contato.data[i].id}" class="remover" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        </td>
                    </tr>`;
                }
            }
            $('.table-group-divider').html(rows);

        },
        error: function(xhr) {
            console.log(xhr.responseText);
        }
    });
}
;
function buscarContatoRemover(){
    $(document).on('click', '.remover', function() {
        let id = $(this).data('id');
        excluindoContato(id);
    });
}
function buscarContatoEditar(){
    $(document).on('click', '.editar', function() {
        let id = $(this).data('id');
        window.location.href = `/editar/${id}`;
    });    
}
function excluindoContato(id){
    $(document).on("click","#excluir",function(){
        $.ajax({
            url: `http://localhost:8000/api/contatos/${id}`,
            type: 'DELETE',
            success: function() {
                alert("Contato excluído com sucesso");
                $("#exampleModal").modal('hide');
                location.reload();
                 
            },
            error: function(xhr) {
                console.log(xhr.responseText);
            }
        })
    })
}
buscarContatos()
buscarContatoRemover();
buscarContatoEditar();
