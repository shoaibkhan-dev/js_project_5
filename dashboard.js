// dashboard.js

const currentUserEmail = localStorage.getItem("currentUser");
const users = JSON.parse(localStorage.getItem("users")) || [];
const user = users.find(u => u.email === currentUserEmail);

// Redirect if not logged in
if (!user) {
  window.location.href = "index.html";
}

document.getElementById("welcome").innerText = `Welcome, ${user.name}`;

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
});

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const todoForm = document.getElementById("todoForm");

let tasks = JSON.parse(localStorage.getItem(`tasks-${currentUserEmail}`)) || [];

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    const text = document.createElement("span");
    text.innerText = task.title;
    if (task.completed) {
      text.style.textDecoration = "line-through";
    }
    text.addEventListener("click", () => toggleTask(index));

    const btns = document.createElement("div");

    const editBtn = document.createElement("button");
    editBtn.className = "btn btn-sm btn-warning me-2";
    editBtn.innerText = "Edit";
    editBtn.onclick = () => editTask(index);

    const delBtn = document.createElement("button");
    delBtn.className = "btn btn-sm btn-danger";
    delBtn.innerText = "Delete";
    delBtn.onclick = () => deleteTask(index);

    btns.append(editBtn, delBtn);
    li.append(text, btns);
    taskList.appendChild(li);
  });
}

function saveTasks() {
  localStorage.setItem(`tasks-${currentUserEmail}`, JSON.stringify(tasks));
}

todoForm.addEventListener("submit", e => {
  e.preventDefault();
  const task = taskInput.value.trim();
  if (task) {
    tasks.push({ title: task, completed: false });
    saveTasks();
    renderTasks();
    taskInput.value = "";
  }
});

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function editTask(index) {
  const newTitle = prompt("Edit your task:", tasks[index].title);
  if (newTitle !== null && newTitle.trim() !== "") {
    tasks[index].title = newTitle.trim();
    saveTasks();
    renderTasks();
  }
}

renderTasks();


try {
    
} catch (error) {
    
}