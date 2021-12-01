window.onload = function () {
/* A seguir está o código para criar uma tarefa quando inserido um texto e clicado o botão. */
  const buttonCreateTask = document.getElementById('criar-tarefa');
  const taskList = document.querySelector('#lista-tarefas');
  let taskListItems = document.getElementsByTagName('LI');

  function createTask() {
    const taskListItem = document.createElement('li');
    const textoTarefa = document.getElementById('texto-tarefa').value;

    if (textoTarefa === '') {
      window.alert('Não há texto a adicionar!');
    } else {
      taskListItem.innerText = textoTarefa;
      taskList.appendChild(taskListItem);
      document.getElementById('texto-tarefa').value = '';
    }
  }

  buttonCreateTask.addEventListener('click', createTask);

/* Alterar o fundo do item clicado para cinza e qualquer não-clicado para branco. */
  function makeOneGray() {
    function ungray() {
      let oldSelected = document.querySelector('.selected');
      if (oldSelected != null) {
        oldSelected.classList.remove('selected');
        oldSelected.style.backgroundColor = '';
      }
    }
    function gray() {
      let clicked = event.target;
      if (clicked !== taskList) {
        clicked.classList.add('selected');
        clicked.style.backgroundColor = 'rgb(128, 128, 128)';
      }
    }
    ungray();
    gray();
  }
  // tem que fazer que apenas o item li possa ficar cinza, e não a ol também.
  taskList.addEventListener('click', makeOneGray);

};
