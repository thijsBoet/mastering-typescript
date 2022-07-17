"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.getElementById("todoform");
const list = document.getElementById("todolist");
const todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    const todosJson = localStorage.getItem('todos');
    if (todosJson === null)
        return [];
    return JSON.parse(todosJson);
}
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
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
    const newLI = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
        todo.completed = checkbox.checked;
    });
    saveTodos();
    newLI.append(todo.text);
    newLI.append(checkbox);
    list === null || list === void 0 ? void 0 : list.append(newLI);
}
form.addEventListener("submit", handleSubmit);
