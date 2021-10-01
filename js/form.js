
var botaoAdicionarCliente  = document.querySelector("#adicionar-paciente");

botaoAdicionarCliente.addEventListener("click",function(event){
    
    //extrai infomrações do paciente

    obtemPacienteForm(form)

    var form = document.querySelector("#form-adiciona")
    
    var paciente = obtemPacienteForm(form);
    console.log(paciente)

    //cria tr e td do paciente 
    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent =  gordura;
    imcTd.textContent = calculaImc(peso,altura);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    
    //adiciona paciente na tabela 
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    console.log(tabela)
    console.log(pacienteTr)


    
    event.preventDefault()
    console.log("Você apertou no botão!")
})

function obtemPacienteForm(form){
    var paciente = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura  : form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}