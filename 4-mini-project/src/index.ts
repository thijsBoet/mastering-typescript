interface Todo {
  text: string;
  completed: boolean;
}
const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement
const form = document.getElementById("todoform")! as HTMLFormElement
const list = document.getElementById("todolist")! as HTMLUListElement

const todos: Todo[] = readTodos();
todos.forEach(createTodo);

function readTodos(): Todo[] {
  const todosJson = localStorage.getItem('todos');
  if (todosJson === null) return [];
  return JSON.parse(todosJson)
}

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false
  }
  createTodo(newTodo);
  todos.push(newTodo);
  saveTodos();
  localStorage.setItem('todos', JSON.stringify(todos));
  input.value = "";
}

function createTodo(todo: Todo) {
  if (todo.text === '') return;
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
	list?.append(newLI);
}

form.addEventListener("submit", handleSubmit)