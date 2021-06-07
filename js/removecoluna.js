
var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick",function(event){ // dblclick para dois click

    event.target.parentNode.classList.add("fadeOut"); // quando for dado dois click, apaga a linha do pai

    setTimeout(function(){ // settimeout animação/transição
        event.target.parentNode.remove();
    }, 500)
 })

