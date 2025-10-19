const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

renderTasks();

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', e => {
  if(e.key === 'Enter') addTask();
});

function addTask() {
  const text = taskInput.value.trim();
  if(!text) return;
  tasks.push({text, done:false});
  taskInput.value = '';
  saveTasks();
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, i) => {
    const li = document.createElement('li');
    li.textContent = task.text;
    if(task.done) li.classList.add('done');
    li.addEventListener('click', () => toggleDone(i));

    const del = document.createElement('span');
    del.textContent = '✖';
    del.addEventListener('click', e => {
      e.stopPropagation();
      deleteTask(i);
    });

    li.appendChild(del);
    taskList.appendChild(li);
  });
}

function toggleDone(i) {
  tasks[i].done = !tasks[i].done;
  saveTasks();
  renderTasks();
}

function deleteTask(i) {
  tasks.splice(i,1);
  saveTasks();
  renderTasks();
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Footer links
document.getElementById('contact').addEventListener('click', () => {
  alert('Phone Number: 91+8682940603');
});

document.getElementById('linkedin').addEventListener('click', () => {
  window.open('https://www.linkedin.com/in/r-pradeep-b9a440349', '_blank');
});
