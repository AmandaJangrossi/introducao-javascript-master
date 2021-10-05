
var botaoAdicionarCliente  = document.querySelector("#adicionar-paciente");

botaoAdicionarCliente.addEventListener("click",function(event){
    event.preventDefault()
    
    //extrai infomrações do paciente

    //lê dados do form
    var form = document.querySelector("#form-adiciona");
    
    var paciente = obtemPacienteForm(form);
    console.log(paciente)

    //cria a td e a tr do paciente
    var pacienteTr = criaTr(paciente);
    console.log(pacienteTr)
   
    
    //adiciona paciente na tabela 
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
});

function obtemPacienteForm(form){

    var paciente = {
       nome: form.nome.value,
       peso: form.peso.value,
       altura: form.altura.value,
       gordura: form.gordura.value,
       imc: calculaImc(form.peso.value, form.altura.value)
    }
    
    return paciente;
};

function criaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");


    pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(criaTd(paciente.imc, "info-imc"));

    return pacienteTr;
};

function criaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    
    return td;
}
