const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// if user forgot to enter task allert msg
function addTask() {
    const task = inputBox.value.trim();
    if (!task) {
        alert("Please write down a task");
        return;
    }

    const li = document.createElement("li");

    // updating the list accoring to Task enterd by user
    li.innerHTML = `
    <label>
        <input type="checkbox" class="task-checkbox">
        <span>${task}</span>
    </label>
    <span class="edit-btn">eidt</span>
    <span class="delete-btn">Delete</span>
`;


    listContainer.appendChild(li);
    inputBox.value = "";

    const checkbox = li.querySelector("input");
    const editBtn = li.querySelector(".edit-btn");
    const deleteBtn = li.querySelector(".delete-btn");
    const taskSpan = li.querySelector("span");

    checkbox.addEventListener("click", function () {
        li.classList.toggle("completed", checkbox.checked);
        updateCounters();
    });


    // for edit button
    editBtn.addEventListener("click", function () {
        const update = prompt("Edit task:", taskSpan.textContent);
        if (update !== null) {
            taskSpan.textContent = update;
            li.classList.remove("completed");
            checkbox.checked = false;
            updateCounters();
        }
    });

    // for delete button
    deleteBtn.addEventListener("click", function () {
        if (confirm("Are you sure you want to delete this task?")) {
            li.remove();
            updateCounters();
        }
    });

    updateCounters();
}

// update completed task and uncompleted task
function updateCounters() {
    const completedTasks = document.querySelectorAll(".completed").length;
    const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;

    document.getElementById("completed-counter").textContent = completedTasks;
    document.getElementById("uncompleted-counter").textContent = uncompletedTasks;
}
