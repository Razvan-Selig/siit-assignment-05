console.log("To-do list");

const taskBox = document.querySelector("#dailyTasks");
const taskList = document.querySelector("#taskList");
const button = document.querySelector("#enter");

function dailyTask() {
  if (taskBox.value == "") {
    alert("You have to type in a task");
  } else {
    const listElement = document.createElement("li");

    const check = document.createElement("input")
    check.setAttribute("type", "checkbox")
    check.className ="check"
    listElement.append(check)

    taskList.append(listElement);

    const taskInput = taskBox.value;
    listElement.append(taskInput);
    

    const icon = document.createElement("i")
    icon.className = "fa-solid fa-trash"
    listElement.append(icon)

    listElement.addEventListener("click", () => {
      check.checked = !check.checked;
    })


    icon.addEventListener("click", () => {
        listElement.remove()
    })

    taskBox.value = "";

    
  }
}

button.addEventListener("click", dailyTask);
