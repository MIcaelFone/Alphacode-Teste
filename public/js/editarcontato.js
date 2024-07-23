
function buscarContato() {
    let id = window.location.href.split('/')[4];
    id = parseInt(id);
    $.ajax({
        url: `http://localhost:8000/api/contatos/${id}`,
        type: 'GET',
        success: function(contato) {
            if (contato.data) {
                let data = contato.data;
                let dataNascimento = data.dataNasciment
                $('#inputNome').attr('value', data.nome);
                $('#inputDataNascimento').attr('value', dataNascimento);
                $('#inputEmail').attr('value', data.email);
                $('#inputProfissao').attr('value', data.profissao);
                $('#inputTelefone').attr('value', data.telefone);
                $('#inputCelular').attr('value', data.celular);
            }
        },
        error: function(xhr) {
            console.log(xhr.responseText);
        }
    });
}
function validarEmail(email) {
    if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
        alert('Email inválido');
        return false;
    }
    return true;
}

function validarDataNascimento(dataNascimento) {
    let ano = dataNascimento.split("-")[0];
    let anoAtual = new Date().getFullYear();
    if (ano.length != 4 || ano > anoAtual || ano < 1900) {
        alert('Data de nascimento inválida');
        return false;
    }
    return true;
}

function validarTelefone(telefone) {
    const regexTelefone = /^\(\d{2}\)-\d{4}-\d{4}$/;
    if (!regexTelefone.test(telefone)) {
        alert("Telefone inválido");
        return false;
    }
    return true;
}

function validarCelular(celular) {
    const regexCelular = /^\(\d{2}\)-\d{5}-\d{4}$/;
    if (!regexCelular.test(celular)) {
        alert("Celular inválido");
        return false;
    }
    return true;
}

function validarNome(nome) {
    const regex = /^[a-zA-ZÀ-ÿ\s]+$/;
    if (!regex.test(nome)) {
        alert("Nome inválido");
        return false;
    }
    return true;
}

function validarProfissao(profissao) {
    const regex = /^[a-zA-ZÀ-ÿ\s]+$/;
    if (!regex.test(profissao)) {
        alert("Profissão inválida");
        return false;
    }
    return true;
}

function atualizarContato() {
    $("#botao").on("click", function() {
        let email = $('#inputEmail').val();
        let dataNascimento = $('#inputDataNascimento').val();
        let telefone = $('#inputTelefone').val();
        let celular = $('#inputCelular').val();
        let nome = $('#inputNome').val();
        let profissao = $('#inputProfissao').val();
        if (dataNascimento && email && telefone && celular && nome && profissao) {
            if (!validarDataNascimento(dataNascimento) || !validarEmail(email) || !validarTelefone(telefone) || !validarCelular(celular) || !validarNome(nome) || !validarProfissao(profissao)) {
                return;
            } 
            let id = window.location.href.split('/')[4];
            id = parseInt(id);
            const dados = {
                nome: nome,
                email: email,
                telefone: telefone,
                dataNascimento: dataNascimento,
                celular: celular,
                profissao: profissao
            };
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });

            $.ajax({
                url: `http://localhost:8000/api/contatos/${id}`,
                type: 'PUT',
                data:dados,
                success: function(response) {
                    console.log("sucesso " + response);
                    alert("Contato atualizado com sucesso");   
                },
                error: function(xhr) {
                    console.log(xhr.responseText); // Verifique o conteúdo da resposta para entender o erro
                    alert("Erro ao realizar para atualizar contato");
                }
                
            });
        }

    });
}
 buscarContato();
 atualizarContato();


