const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement
const form = document.getElementById("todoform")! as HTMLFormElement
const todolist = document.getElementById("todolist")! as HTMLUListElement

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  alert(input.value);
  input.value = "";
}

form.addEventListener("submit", handleSubmit)