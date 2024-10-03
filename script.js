// DOM Elements
const taskInput = document.getElementById("new-task");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create list item (li) for the task
  const taskItem = document.createElement("li");
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">Delete</button>
  `;

  // Mark task as completed when clicked
  taskItem.addEventListener("click", function () {
    taskItem.classList.toggle("completed");
  });

  // Delete task when delete button is clicked
  const deleteBtn = taskItem.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent completing task when clicking delete
    taskItem.remove();
  });

  // Add task to the task list
  taskList.appendChild(taskItem);

  // Clear the input
  taskInput.value = "";
}

// Event listener for add button
addTaskBtn.addEventListener("click", addTask);

// Allow "Enter" key to add task as well
taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
