
function receberDados() {
    $.ajax({
        url: 'http://localhost:8000/api/contato',
        type: 'GET',
        success: function(data) {
            let rows = '';
            if(data.data.length > 0){
                for (let i = 0; i < data.data.length; i++) {
                    rows +=
                     `<tr>
                        <td>${data.data[i].nome}</td>
                        <td>${data.data[i].email}</td>
                        <td>${data.data[i].telefone}</td>
                        <td>${data.data[i].celular}</td>
                        <td>${data.data[i].dataNascimento}</td>
                         <td>${data.data[i].profissao}</td>
                            <td><img src="../imagens/editar.png" alt="Editar" style="width: 20px; height: 20px;" id="editar"></td>
                            <td><img src="../imagens/excluir.png" alt="Excluir" style="width: 20px; height: 20px;" id="excluir"></td>
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
receberDados()