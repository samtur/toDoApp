const taskTable = document.querySelector(".taskTable");

const displayTask = (taskList) => {
  for (let i in taskList) {
    if (taskList[i].add === true) {
      continue;
    }
    const checkLabel = document.createElement("label");
    checkLabel.classList.add("checkLabel");
    checkLabel.id = `checkLabel${i}`;
    taskTable.appendChild(checkLabel);
    const checkBox = document.createElement("input");
    checkBox.classList.add("checkBox");
    checkBox.id = `checkBox${i}`;
    checkBox.type = "checkbox";
    checkLabel.appendChild(checkBox);
    const taskNameDisplay = document.createElement("div");
    taskNameDisplay.classList.add("taskNameDisplay");
    taskNameDisplay.id = `taskNameDisplay${i}`;
    taskNameDisplay.innerHTML = taskList[i].taskName;
    const taskNoteDisplay = document.createElement("div");
    taskNoteDisplay.classList.add("taskNoteDisplay");
    taskNoteDisplay.id = `taskNoteDisplay${i}`;
    taskNoteDisplay.innerHTML = taskList[i].taskNote;
    const taskDateDisplay = document.createElement("div");
    taskDateDisplay.classList.add("taskDateDisplay");
    taskDateDisplay.id = `taskDateDisplay${i}`;
    taskDateDisplay.innerHTML = taskList[i].taskDate;
    taskTable.appendChild(taskNameDisplay);
    taskTable.appendChild(taskNoteDisplay);
    taskTable.appendChild(taskDateDisplay);
    taskList[i].add = true;
    console.log(taskList[i]);
  }
};
export { displayTask };
