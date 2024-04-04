// Seleção dos elementos do form
const tarefaForm = document.getElementById("tarefa-form")
const tarefaInput = document.getElementById("tarefa-input")

tarefaForm.addEventListener("submit", function(event) {
    event.preventDefault(); // usado pra evitar o comportamento padrão de recarregar a página ao enviar o formulário
    const novaTarefa = tarefaInput.value; // pega o valor que o usuario digitou
    adicionarTarefa(novaTarefa);
    tarefaInput.value = ""; // limpa o campo após adicionar a tarefa
});

function adicionarTarefa(tarefa) {
    const tarefasAtuais = document.querySelector(".tarefas-atuais"); //seleciona a div das tarefas atuais
    const novaDiv = document.createElement("div"); //cria uma nova div para essa tarefa
    novaDiv.classList.add("tarefa"); //classList.add = adiciona a classe "tarefa" à novaDiv
    novaDiv.innerHTML =  ` 
        <p>${tarefa}</p>
        <button class="check" id="botao">Check</button>
        <button class="excluir" id="botao">Excluir</button>
    `; //como deve aparecer na pag
    
    //EXCLUIR
    const botaoExcluir = novaDiv.querySelector(".excluir");
    botaoExcluir.addEventListener("click", function() {
        novaDiv.remove(); // remove a div da tarefa ao clicar no botão
    });

    //CHECK
    const botaoCheck = novaDiv.querySelector(".check");
    botaoCheck.addEventListener("click", function() {
        novaDiv.classList.toggle("concluida"); // remove a classe concluida da div da tarefa
    });
    
    tarefasAtuais.appendChild(novaDiv); // o appendChild(novaDiv) está adicionando a novaDiv à div das tarefasAtuais
}
