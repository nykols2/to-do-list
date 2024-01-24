const form = document.querySelector(".formulario"); // Formulário
const input = document.querySelector("#nova-tarefa"); // Caixa de texto
const list = document.querySelector("#lista"); // Lista de tarefas

//Adicionar tarefas
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Impede o comportamento padrão de recarregar a página
  if (!input.value) return; // Verifica se a caixa de texto não está vazia

  // Cria um novo item de lista (li) 
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${input.value}</span>
    <button>Excluir</button>
  `;

  list.appendChild(li); // Adiciona o item à lista
  input.value = ""; // Limpa a caixa de texto após adicionar a tarefa
});

// Evento de clique na lista para excluir tarefas
list.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") { // Verifica se o elemento clicado é um botão
    e.target.parentElement.remove(); // Remove o item de lista (li) que contém a tarefa
  }
});
