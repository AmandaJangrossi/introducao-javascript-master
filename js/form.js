
var botaoAdicionarCliente  = document.querySelector("#adicionar-paciente");

botaoAdicionarCliente.addEventListener("click",function(event){
    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        console.log(erros)
        return;
    }

    var pacienteTr = criaTr(paciente);
    console.log(pacienteTr)

    var tabela = document.querySelector("#tabela-pacientes");
    console.log(tabela)

    tabela.appendChild(pacienteTr);

    form.reset()
})

function obtemPacienteForm(form){

    var paciente = {
       nome: form.nome.value,
       peso: form.peso.value,
       altura: form.altura.value,
       gordura: form.gordura.value,
       imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}

function criaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(criaTd(paciente.imc, "info-imc"));
    
    return pacienteTr;
}

function criaTd(dado, classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaPaciente(paciente) {
    var erros = []
    if (paciente.nome.length <= 0) erros.push("Nome não pode estar em branco!")
    if (paciente.gordura.length == 0) erros.push("A gordura não pode estar em branco!")
    if (paciente.altura.length == 0) erros.push("A altura não pode estar em branco!")
    if (paciente.peso.length == 0) erros.push("O peso não pode estar em branco!")
    if (!validaPeso(paciente.peso)) erros.push("O peso é inválido!")
    if (!validaAltura(paciente.altura)) erros.push(" A altura é inválida!")

    return erros;
}

function exibeMensagensErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erros){
        var li = document.createElement("li");
        li.textContent = erros;
        ul.appendChild(li);

    })
}
