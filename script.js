window.onload = function () {
  /* A seguir está o código para criar uma tarefa quando inserido um texto e clicado o botão */
  let buttonCreateTask = document.getElementById("criar-tarefa");

  buttonCreateTask.addEventListener('click', createTask);

  function createTask() {
    let taskList = document.getElementById('lista-tarefas');
    let taskListItem = document.createElement('li');
    let textoTarefa = document.getElementById('texto-tarefa').value;
    
    if (textoTarefa === "") {
      window.alert("Não há texto a adicionar!")
    } else {
      taskListItem.innerText = textoTarefa;
      taskList.appendChild(taskListItem);
      document.getElementById('texto-tarefa').value = "";
    }


  }
}
