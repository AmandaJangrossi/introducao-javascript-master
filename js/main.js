
/* 
COMANDOS

    .alert(texto/ação) -> apresenta um popup na tela ao carregar ou executar alguma ação
    .console.log(ação/texto) -> apresenta a saída no console do navegador
    .document.querySelector("tag ou .classe") -> manipular tags/classes/IDs dentro do 
    nosso documento HTML
    .querySelectorAll("tag" ou ".classe") -> como o querySelector retorna apenas o primeiro
    elemento, é necessário usar o complemento "ALL", para que retorne todos elementos de uma
    classe, lista, fila. Retorna um Array.
    .var.textContent -> manipular o texto dentro de tags 
    .var.lenght -> retorna tamanho de uma variável em array
    .var.toFixed(X) -> limita visualização de casas decimais em que X é o número de casas
    .var.style.color -> altera um estilo específico direto no código (não é recomendado por 
    não possuir tanta versatilidade) 
    .var.classList.add("nome-da-classe") -> adiciona uma classe a determinado elemento

*/ 
/*TERMOS/CONTEÚDO

    .DOM -> Document Object Model, como uma cópia da página HTML gravada no navegador e 
    manipulável pelo JS, quando manipulamos o HTML, NÃO estamos mexendo diretamente com
    o arquivo fonte, e sim a RENDERIZAÇÃO do navegador.
    .IF -> Condicional, quando determinada ação deve ser realizada apenas quando statement 
    for satisfeito.
        ."&&" -> "AND" quando duas ou mais afirmações devem ser satisfeitas para execução
        de uma ação.  
        ."||" -> "OR" quando uma OU outra ação deve ser satisfeita para execução de uma 
        ação.
    .FOR -> Realiza determinada ação ATÉ que a condição seja satisfeita. Ex.: conte de 1 até 5
    o programa só irá parar ao chegar ao número 5, condição final.
        .Estrutura -> for(var valorInicial; valorInicial<valorFinal; valorInicial++)

    */
/*
DICAS/BOAS PRÁTICAS

    .Deixar Script no final da página para evitar erros de carregamento
    .Usar IDs e Classes para manipulação de tags, para evitar alterações indesejada
    .Padrão JS -> camelCase, tanto para variáveis quanto propriedades (ex.:backgroundColor)
    .Sempre se atentar aos parênteses ao realizar cálculos

*/

// Consulta, Condições, Loops


var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista"


var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes) // retorna um Array com 5 elementos


for(var i = 0; i < pacientes.length; i++){
    
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoValido = true; 
    var alturaValida = true;

    tdIMC = paciente.querySelector(".info-imc") 

    if (peso <= 0 || peso >= 1000){
        console.log("Peso inválido!");
        tdIMC.textContent = "Peso inválido!" 
        pesoValido = false;
        paciente.classList.add("paciente-invalido")
    }

    if (altura <= 0 || altura >= 3){
        console.log("Altura inválida!");
        tdIMC.textContent = "Altura inválida!";
        alturaValida = false;
        paciente.classList.add("paciente-invalido")

    }

    if (alturaValida && pesoValido){ 
        var imc = peso / (altura*altura);
        tdIMC.textContent = imc.toFixed(2);
    }

}





//calc imc 






