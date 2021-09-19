var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    // Extraindo informações do paciente através do form
    var paciente = obtemPacienteDoFormulario(form);    
    
    // Valida o paciente, e exibe mensagens de erro
    var erros = validaPaciente(paciente);        
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }
    // Limpando as mensagens de erro
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
    form.reset();

    adicionaPacienteNaTabela(paciente);
});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}
    /*var nomeTd = document.createElement("td");
    nomeTd.classList.add("info-nome");
    nomeTd.textContent = paciente.nome;	
    Obs: três linhas de código para cada item substituidas pela function montaTd
    */
    /*var nomeTd = montaTd(paciente.nome, "info-nome");
    Obs: para deixar o código ainda mais limpo, podemos incluir a função
    montaTd diretamente no appendChild, ao invés de atribuirmos diversas variáveis
    e depois incluir a variável no appendChild.
    Ex: pacienteTr.appendChild(nomeTd); SUBSTITUIDO POR:
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    */

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0) erros.push("O nome não pode estar em branco!");
    if(paciente.peso.length == 0) erros.push("O peso não pode estar em branco!");
    if(paciente.altura.length == 0) erros.push("A altura não pode estar em branco!");
    if(paciente.gordura.length ==0) erros.push("A gordura não pode estar em branco!");

    if(!validaPeso(paciente.peso)) erros.push("O peso é inválido!");
    if(!validaAltura(paciente.altura)) erros.push("A altura é inválida!");

    return erros;
}
    /*if(!validaAltura(paciente.altura)){
        erros.push("A altura é inválida!");
    }
    Obs: como o if é simples, nós podemos remover as chaves, 
    e escrever o código em uma linha só*/

