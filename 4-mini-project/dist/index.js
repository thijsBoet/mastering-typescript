"use strict";
var btn = document.getElementById("btn");
var input = document.getElementById("todoinput");
var form = document.getElementById("todoform");
var todolist = document.getElementById("todolist");
function handleSubmit(e) {
    e.preventDefault();
    alert(input.value);
    input.value = "";
}
form.addEventListener("submit", handleSubmit);
