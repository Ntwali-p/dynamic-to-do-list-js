// Wait for the HTML document to fully load
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Define the addTask function
  function addTask() {
    const taskText = taskInput.value.trim(); // Get user input

    // If input is empty, show alert
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new list item (li)
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // Add functionality to remove the task
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append the remove button to the list item
    li.appendChild(removeBtn);

    // Add the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }

  // Event listener for the Add Task button
  addButton.addEventListener('click', addTask);

  // Event listener for pressing "Enter" key in the input
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Optional: auto-run addTask on load (if needed)
  // addTask();
});