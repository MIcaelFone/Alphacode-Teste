
function validarEmail() {
    $('#botao').on("click",function(e){
        let email = $('#inputEmail').val();
        if(email.indexOf('@') == -1 || email.indexOf('.') == -1 ) {
            alert('Email inválido');
            return false;
        } 
        return true; 
     });
}
function validarDataNascimento() {
    $('#botao').on("click",function(e){
        e.preventDefault();
        let dataNascimento = $('#inputDataNascimento').val();
        let ano =dataNascimento.split("-")[0]
        let anoAtual=new Date()
        anoAtual=anoAtual.getFullYear()
        if(ano.length != 4 ||ano> anoAtual || ano<1900) {
            alert('Data de nascimento inválida');
            return false; 
        }
        return true
        
    });
}
function validarTelefone() {
    $("#botao").on("click", function(e) {
        e.preventDefault();
        const regexCelular = /^\(\d{2}\)-\d{5}-\d{4}$/
        const regexTelefone = /^\(\d{2}\)-\d{4}-\d{4}$/;
        const telefone = $('#inputTelefone').val();
        const celular = $('#inputCelular').val();
        console.log(regexCelular.test(celular))
        if (!regexCelular.test(celular)) {
            alert("Celular inválido");
            return false; // Retorna false para não continuar o processamento
        }
        
        if (!regexTelefone.test(telefone)) {
            alert("Telefone inválido");
            return false; // Retorna false para não continuar o processamento
        }
        return true; // Se tudo estiver válido, retorna true
    });
}
function validarCamposTexto(){
    $("#botao").on("click",function(e){
        e.preventDefault();
        const regex=/^[a-zA-Z\s]+$/
        let nome = $("#inputNome").val()
        let profissao=$("#inputProfissao").val()
        if(!regex.test(nome) && !regex.test(profissao)){
            alert("Nome e profissao inválidos")
            return false
        }
        else if(!regex.test(nome)){
            alert("Nome inválido")
            return false
        }
        else if(!regex.test(profissao)){
            alert("Profissao inválida")
            return false
        }
       
        return true
        
    })
}
 
function cadastrarDados() {
    $("#botao").on("click", function() {
        let email = $('#inputEmail').val();
        let dataNascimento = $('#inputDataNascimento').val();
        let telefone = $('#inputTelefone').val();
        let celular = $('#inputCelular').val();
        let nome = $('#inputNome').val();
        let profissao = $('#inputProfissao').val();
        if (dataNascimento && email && telefone && celular && nome && profissao) {
            if (!validarDataNascimento()==true && !validarEmail()==true && !validarTelefone()==true && !validarCamposTexto()==true) {
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
                console.log(dados);
                $.ajax({
                    url: 'http://localhost:8000/api/contato',
                    type: 'POST',
                    data: JSON.stringify(dados),
                    contentType: 'application/json',
                    dataType: 'json',
                    success: function(response) {
                        console.log("sucesso " + response);
                        alert("Cadastro realizado com sucesso");   
                    },
                    error: function(xhr) {
                        console.log(xhr.responseText); // Verifique o conteúdo da resposta para entender o erro
                        alert("Erro ao realizar cadastro");
                    }
                    
                });
            }
        } else {
            alert("Todos os campos são obrigatórios preencher");
        }
    });
}
 
cadastrarDados()
 

