var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(function(){
        event.target.parentNode.remove();
    },500);  
});

/*event.target.parentNode.remove(); 
Esse código escrito sozinho removeria cada linha da tabela de forma instantânea.
Para ficar mais visual para o usuário adicionamos no index.css a classe fadeOut 
e a aplicamos ao event. Assim, conseguimos eliminar de maneira gradual os dados
de cada linha. Posteriormente adicionamos o mesmo código com o setTimeout para 
remover também a linha da tabela, e não somente os dados, mas agora de forma 
gradual seguindo o timing da remoção dos dados (fadeOut).*/

/*var pacientes = document.querySelectorAll(".paciente");
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("Fui clicado");
        this.remove();
    });
});
Nesse exemplo nós conseguiriamos excluir com dois cliques apenas os 
dados de pacientes que estão no index. Com o código acima conseguimos 
excluir qualquer linha da tabela, inclusive as adicionadas, ao clicar 
2x em qualquer parte da linha*/