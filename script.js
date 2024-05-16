const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = '';
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });
        li.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            li.remove();
        });
    } else {
        alert('Please enter a task!');
    }
}
