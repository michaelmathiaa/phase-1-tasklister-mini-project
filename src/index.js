document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('create-task-form').addEventListener('submit', handleSubmit)
});

function handleSubmit (e) {
  e.preventDefault();
  const task = e.target[0].value;
  taskDisplay(task);
}

function taskDisplay (task) {
  const taskUl = document.getElementById('tasks');
  const taskLi = document.createElement('li');
  const deleteButton = document.createElement('button');
  
  deleteButton.textContent = 'x';
  deleteButton.addEventListener('click', deleteF);

  taskLi.textContent = task;
  taskLi.appendChild(deleteButton);
  taskUl.appendChild(taskLi);
}

function deleteF (e) {
  e.target.parentNode.remove();
}

/*function submitF (task) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.textContent = 'x';
  p.textContent = `${task}  `;
  p.appendChild(btn);
  document.querySelector('#tasks').appendChild(p);
}*/

/*function sortTasks() {
  const sortTasksSelect = document.getElementById("sort-tasks")
  if (sortTasksSelect.value === "h-l") {
     taskArr.sort((a, b) => a.priorityLevel - b.priorityLevel)
  } else {
     taskArr.sort((a, b) => b.priorityLevel - a.priorityLevel)
  }
  displayTasks()
}*/
