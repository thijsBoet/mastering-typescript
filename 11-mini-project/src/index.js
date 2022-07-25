"use strict";
var btn = document.getElementById("btn");
var input = document.getElementById("todoinput");
var form = document.getElementById("todoform");
var list = document.getElementById("todolist");
var todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    var todosJson = localStorage.getItem('todos');
    if (todosJson === null)
        return [];
    return JSON.parse(todosJson);
}
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    var newTodo = {
        text: input.value,
        completed: false
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    localStorage.setItem('todos', JSON.stringify(todos));
    input.value = "";
}
function createTodo(todo) {
    if (todo.text === '')
        return;
    var newLI = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', function () {
        todo.completed = checkbox.checked;
    });
    saveTodos();
    newLI.append(todo.text);
    newLI.append(checkbox);
    list === null || list === void 0 ? void 0 : list.append(newLI);
}
form.addEventListener("submit", handleSubmit);
