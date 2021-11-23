window.onload = function () {
  /* A seguir está o código para criar uma tarefa quando inserido um texto e clicado o botão. */
  let buttonCreateTask = document.getElementById("criar-tarefa");
  let taskList = document.getElementById('lista-tarefas');

  buttonCreateTask.addEventListener('click', createTask);

  function createTask() {
    let taskListItem = document.createElement('li');
    let textoTarefa = document.getElementById('texto-tarefa').value;
    
    if (textoTarefa === "") {
      window.alert("Não há texto a adicionar!")
    } else {
      taskListItem.innerText = textoTarefa;
      taskList.appendChild(taskListItem);
      document.getElementById('texto-tarefa').value = "";
    }

  /* Alterar o fundo do item clicado para cinza. */
  taskList.addEventListener('click', makeOneGray);

  function makeOneGray() {
    function ungray() {
      let oldSelected = document.querySelector('.selected');
      if (oldSelected != null) {
        oldSelected.classList.remove('selected');
        oldSelected.style.backgroundColor = "";
      }
    }
    function gray() {
      let clicked = event.target;

      clicked.classList.add('selected');
      clicked.style.backgroundColor = "rgb(128, 128, 128)";
    }
    ungray();
    gray();
    /* let clicked = event.target;
    clicked.classList.add('selected');

    let notClicked = document.querySelectorAll('li:not(.selected)');

    notClicked.style.backgroundColor = "";

    clicked.style.backgroundColor = "rgb(128, 128, 128)"; */
  }

  }
}
