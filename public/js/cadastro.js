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

function cadastrarDados() {
    $("#botao").on("click", function() {
        let email = $('#inputEmail').val();
        let dataNascimento = $('#inputDataNascimento').val();
        let telefone = $('#inputTelefone').val();
        let celular = $('#inputCelular').val();
        let nome = $('#inputNome').val();
        let profissao = $('#inputProfissao').val();
        let checkboxPossuiWhatsapp = $('#inputcelularpossuiWhatsapp').is(':checked');
        let checkboxenviarNotificacoesSms = $('#inputNotificacaoSMS').is(':checked');
        let checkboxenviarNotificacoesEmail = $('#inputNotificacaoEmail').is(':checked');
        
        if (!validarDataNascimento(dataNascimento) || !validarEmail(email) || !validarTelefone(telefone) || !validarCelular(celular) || !validarNome(nome) || !validarProfissao(profissao)) {
            return;
        }

        let celularPossuiWhatsapp = checkboxPossuiWhatsapp ? true : false;
        let enviarNotificacoesSms = checkboxenviarNotificacoesSms ? true : false;
        let enviarNotificacoesEmail = checkboxenviarNotificacoesEmail ? true : false;

        const dados = {
            nome: nome,
            email: email,
            telefone: telefone,
            dataNascimento: dataNascimento,
            celular: celular,
            profissao: profissao,
            celularPossuiWhatsapp: celularPossuiWhatsapp,
            enviarNotificacaoEmail: enviarNotificacoesEmail,
            enviarNotificacaoSms: enviarNotificacoesSms,
        };

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        
        $.ajax({
            url: 'http://localhost:8000/api/contatos',
            type: 'POST',
            data: JSON.stringify(dados),
            contentType: 'application/json',
            dataType: 'json',
            success: function(response) {
                console.log(response.message);
                alert("Cadastro realizado com sucesso");
                window.location.href = "http://localhost:8000/gerenciamento";
            },
            error: function(xhr) {
                console.log(xhr.responseText);
                alert("Erro ao realizar cadastro");
            }
        });
    });
}

$(document).ready(function() {
    cadastrarDados();
});
