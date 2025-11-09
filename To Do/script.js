const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function createTask(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        li.style.animation = 'fadeOut 0.4s forwards';
        li.addEventListener('animationend', () => {
            todoList.removeChild(li);
        });
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}

addBtn.addEventListener('click', () => {
    const taskText = todoInput.value.trim();
    if (taskText !== '') {
        createTask(taskText);
        todoInput.value = '';
    }
});

todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addBtn.click();
    }
});
