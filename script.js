document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a task
  function addTask() {
    const taskText = taskInput.value.trim(); // Get and trim input

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.classList.add('remove-btn'); // ✅ Using classList.add

    // Remove the task when the button is clicked
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append button to the list item
    li.appendChild(removeBtn);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }

  // Event listener for "Add Task" button
  addButton.addEventListener('click', addTask);

  // Event listener for Enter key in input
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
