var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...")

    var xhr = new XMLHttpRequest();

    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes22222");
    
    xhr.addEventListener("load", function(){
        var mostraErro = document.querySelector("#erro-ajax")

        if(xhr.status==200){
            resposta = xhr.responseText;
            var pacientes_request = JSON.parse(resposta);
            mostraErro.classList.add("esconde-busca")
            pacientes_request.forEach(function(paciente){
            adicionaPacienteTabela(paciente)  
            }
        )}

        else{
            console.log("Houve um erro!")
            console.log(xhr.responseText)
            mostraErro.classList.remove("esconde-busca")
        }
    })

    xhr.send();
})