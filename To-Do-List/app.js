
// UI Elements

var form = document.querySelector('form');

var ul = document.querySelector('.lists');

var toDo = document.querySelector('.todo-input').value;

form.addEventListener('submit', addTask);

function addTask(e) {
    // Create Element
    
    const li = document.createElement('li');

    li.className = "li-lists incomplete";

    li.appendChild(document.createTextNode(toDo));

    const link = document.createElement('a');
    link.className = "isCompleted";
    link.innerHTML = '<i class = "fas fa-check"></i>';
    const deleteLink = document.createElement('a');
    deleteLink.className = 'delete-task';
    deleteLink.innerHTML = '<i class = "far fa-times-circle"></i>';
    link.appendChild(deleteLink);
    li.appendChild(link);

    ul.appendChild(li);
    toDo = '';

    e.preventDefault();
}