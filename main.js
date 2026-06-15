let task = document.getElementById('task'); // fetch the task from the input field
let addButton = document.getElementById('add-btn'); // fetch the 'add' work from the add button
let taskList = document.getElementById('list'); // get into the list of tasks!
let clearButton = document.getElementById('clear-btn');
let noneText = document.getElementById('none-text');
let deleteButton = document.getElementById('delete-icon');

addButton.addEventListener('click', addTask); // adding an event listener to the add button so that javascript reacts with the add task function whenever the button is clicked.

clearButton.addEventListener('click', clearAll);

function addTask() {
    if (task.value != '') {

        noneText.style.display = "none";
        taskList.style.display = "block";

        let listItem = document.createElement('li');
        listItem.innerHTML = `
            <input type="checkbox" class="checkbox">
            <span>${task.value}</span>
            <div class="option">
                <button class="delete-btn"><i class="fa-solid fa-xmark"></i></button>
            </div>
        `;

        taskList.appendChild(listItem);
        task.value = '';

        // ===== Add delete functionality =====
        let deleteBtn = listItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            listItem.remove();
            if (taskList.children.length === 0) {
                noneText.style.display = 'block';
                taskList.style.display = 'none';
            }
        });

        // ===== Add checkbox functionality =====
        let checkbox = listItem.querySelector('.checkbox');
        checkbox.addEventListener('change', () => {
            listItem.classList.toggle('completed', checkbox.checked);
        });

    } else {
        alert('Please enter a task!');
    }
}


function clearAll(){
    taskList.innerHTML = '';
    noneText.style.display = 'block';
    taskList.style.display = 'none';
}