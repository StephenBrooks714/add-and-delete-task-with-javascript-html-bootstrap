function addTask(){
    let task = document.getElementById("addTaskForm").value;
    let taskList = document.getElementById("taskList");
    let div = document.createElement("div");
    div.innerHTML = task;
    div.classList.add("col-lg-3","card","m-3","p-2");
    div.style.maxWidth = "19rem";
    div.style.backgroundColor = "white";
    taskList.appendChild(div);
    document.getElementById("addTaskForm").value = "";

    div.addEventListener("click", function () {
        taskList.removeChild(div);
    })

    div.addEventListener("mouseover", function () {
        div.style.backgroundColor = "red";
        div.style.textDecoration = "line-through";
    })

    div.addEventListener("mouseout", function () {
        div.style.backgroundColor = "white";
    })
}