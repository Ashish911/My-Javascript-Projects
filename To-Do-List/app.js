
// UI Elements

var form = document.querySelector('form');

var ul = document.querySelector('.todo-list');

var toDo = document.querySelector('.todo-input');

form.addEventListener('submit', addTask);

ul.addEventListener('click', removeTask);

function addTask(e) {

    // Create Element
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    // Create LI
    const li = document.createElement('li');
    li.innerText = toDo.value;
    li.classList.add('todo-item');

    todoDiv.appendChild(li);

    const link = document.createElement('button');
    link.innerHTML = '<i class = "fas fa-check"></i>';
    link.classList.add('complete-btn');
    todoDiv.appendChild(link);
    const deleteLink = document.createElement('button');
    deleteLink.innerHTML = '<i class = "far fa-times-circle"></i>';
    deleteLink.classList.add('delete-btn');
    todoDiv.appendChild(deleteLink);

    ul.appendChild(todoDiv);

    e.preventDefault();
}

function removeTask(e) {
    const item = e.target;

    // Delete
    if(item.classList[0] === 'delete-btn'){
        const todo = item.parentElement;
        todo.classList.add("fall");

        todo.addEventListener('transitionend', function() {
            todo.remove();
        })
    }

    // Check
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}