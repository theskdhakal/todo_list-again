const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

// whenever add button is clicked

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

  //append todoDiv to todoList (main ul)
  todoList.appendChild(todoDiv);

  //   empty input value after adding item to list
  todoInput.value = "";
});

// when delete or check button is  clicked
todoList.addEventListener("click", function deleteCheck(e) {
  console.log(e.target);
  const item = e.target;

  console.log(item.classList);
  //delete
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    // ( when items parent Element is set to be class of todoList, why all of is deleted?)
    todo.remove();
  }

  //check
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
});

function saveTodos(todo) {
  //check if there is anything in storage
  //if anything is there put it in a array
  //push the new item in the array
  // save all to local storage

  //   Explain this
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);

  localStorage.setItem("todos", JSON.stringify(todos));
}
