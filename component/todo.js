const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => parseInt(toDo.id) !== parseInt(li.id));
    li.remove();
    saveToDos();
}


function showToDo(addTodo) {
    const li = document.createElement("li");
    li.id = addTodo.id;
    const span = document.createElement("span");
    span.innerText = addTodo.text;
    const deleteButton = document.createElement("span");
    deleteButton.className = "delete";
    deleteButton.innerText = "❌";
    deleteButton.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(deleteButton);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Math.round(Math.random() * 100)
    };
    toDos.push(newTodoObj);
    showToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(showToDo);
}