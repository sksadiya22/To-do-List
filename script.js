document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todoInput");
  const todoList = document.getElementById("todoList");
  const addBtn = document.getElementById("addBtn");

  function addTask() {
    const taskText = todoInput.value.trim();
    if (!taskText) return;

    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span class="task-text">${taskText}</span>
      <button class="removeBtn">✖</button>
    `;

    // Toggle completion
    listItem.querySelector(".task-text").addEventListener("click", () => {
      listItem.classList.toggle("completed");
    });

    // Remove task
    listItem.querySelector(".removeBtn").addEventListener("click", () => {
      todoList.removeChild(listItem);
    });

    todoList.appendChild(listItem);
    todoInput.value = "";
    todoInput.focus();
  }

  addBtn.addEventListener("click", addTask);
  todoInput.addEventListener("keypress", e => {
    if (e.key === "Enter") addTask();
  });
});
