const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

todoBtn.addEventListener("click", function addTodo(e) {
  e.preventDefault();
  if (!todoInput.value) {
    return;
  }

  //create todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //create li and append to todoDiv
  const NewTodo = document.createElement("li");
  NewTodo.classList.add("todo-item");
  NewTodo.innerText = todoInput.value;

  todoDiv.appendChild(NewTodo);

  //check-btn
  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = "<i class='fa-solid fa-check'></i>";
  completeBtn.classList.add("complete-btn");
  todoDiv.appendChild(completeBtn);

  //delete-btn
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "<i class='fa-solid fa-trash'></i>";
  deleteBtn.classList.add("delete-btn");
  todoDiv.appendChild(deleteBtn);

  todoList.appendChild(todoDiv);
});
