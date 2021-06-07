var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(event){
    event.preventDefault();
    var formulario = document.querySelector("#form-adicionaa");

    var pessoa = organizarForm(formulario);

    pessoaNome = pessoa.nome;
   

    var xhr = new XMLHttpRequest();

    xhr.open("GET","https://viacep.com.br/ws/"+pessoa.cep+"/json/");

    xhr.send();

    xhr.addEventListener("load", function(pessoa){
        if(xhr.status == 200){
            var resposta = xhr.responseText;
            var dados = JSON.parse(resposta);
            var prontos = montarObjeto(dados, pessoaNome);
            adicionaPacienteTabela(prontos);
        }else{
            console.log("Não foi encontrado");
        }
    });
});

function montarObjeto(pessoa, nome){
    console.log(nome);
    console.log(pessoa.logradouro);
    console.log(pessoa.bairro);
    console.log(pessoa.localidade);
    console.log(pessoa.uf);
    
    var objetoPronto = {
        nome: nome,
        logradouro: pessoa.logradouro,
        bairro: pessoa.bairro,
        cidade: pessoa.localidade,
        estado: pessoa.uf
    }

    return objetoPronto;
}

function organizarForm(formulario){
    var pessoa = {
        nome: formulario.nome.value,
        cep: formulario.cep.value
    }
   
   

    return pessoa;
}

function adicionaPacienteTabela(paciente){
    var tr = montarTR(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    
    
    tabela.appendChild(tr);
}

function montarTR(paciente){
    var pacienteTR = document.createElement("tr");

    var nomeTD= montarTD(paciente.nome);
    var logradouroTD= montarTD(paciente.logradouro);
    var bairroTD= montarTD(paciente.bairro);
    var cidadeTD= montarTD(paciente.cidade);
    var estadoTD= montarTD(paciente.estado);

    pacienteTR.appendChild(nomeTD);
    pacienteTR.appendChild(logradouroTD);
    pacienteTR.appendChild(bairroTD);
    pacienteTR.appendChild(cidadeTD);
    pacienteTR.appendChild(estadoTD);
    

    return pacienteTR;
}

function montarTD(dado){
    var td = document.createElement("td");
    td.textContent = dado;
    return td;
}