document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('create-task-form').addEventListener('submit', (e) => {
    e.preventDefault();
    submitF(e.target.new_task_description.value);
  });
});

function submitF (task) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.textContent = 'x';
  p.textContent = `${task}  `;
  p.appendChild(btn);
  document.querySelector('#list').appendChild(p);
}

/*function sortTasks() {
  const sortTasksSelect = document.getElementById("sort-tasks")
  if (sortTasksSelect.value === "h-l") {
     taskArr.sort((a, b) => a.priorityLevel - b.priorityLevel)
  } else {
     taskArr.sort((a, b) => b.priorityLevel - a.priorityLevel)
  }
  displayTasks()
}*/