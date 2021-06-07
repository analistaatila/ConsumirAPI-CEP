// capturar o botão
var campoInput = document.querySelector("#filtrar-tabela")

// adc o botão em um evento de click
 campoInput.addEventListener("input",function(){ // o input para verificar o campo está selecionado

    var pacientes = document.querySelectorAll(".paciente")
    var campo = this; // this ela pega o obj dentro do contexto ou seja equivale o campoInput

    if(campo.value.length > 0){
        pacientes.forEach(function(paciente){
            var td = paciente.querySelector(".info-nome") // <td>paulo</td>
            var conteudo = td.textContent; // paulo
            var expressao = new RegExp(campo.value,"i"); // i é ignorar se é M ou m

            if(!expressao.test(conteudo)){ // o ! inverte o sentido no caso o if ta como else
               // visivel na linha 
               paciente.classList.add("esconde"); // css
            }
            else{
                paciente.classList.remove("esconde");
            }
            
        })
    }
    else{
        pacientes.forEach(function(paciente){ // percorre toda  tabela
        paciente.classList.remove("esconde");
        })
    }


 })

 