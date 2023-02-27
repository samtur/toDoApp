import { displayTask } from "./dom";

const taskData = () => {
  const submit = document.querySelector(".submitBtn");
  const taskName = document.querySelector(".taskName");
  const taskNote = document.querySelector(".taskNote");
  const taskDate = document.querySelector(".taskDate");

  let taskList = [];

  function Task(taskName, taskNote, taskDate) {
    this.taskName = taskName;
    this.taskNote = taskNote;
    this.taskDate = taskDate;
    this.done = false;
    this.add = false;
  }

  submit.addEventListener("click", function (e) {
    e.preventDefault();
    if (taskName.value === "" || taskDate.value === "") {
      return;
    }
    let taskNameValue = taskName.value;
    let taskNoteValue = taskNote.value;
    let taskDateValue = taskDate.value;
    taskName.value = "";
    taskNote.value = "";
    taskDate.value = "";
    addToTaskList(taskNameValue, taskNoteValue, taskDateValue);
    displayTask(taskList);
  });

  function addToTaskList(taskNameValue, taskNoteValue, taskDateValue) {
    let toDo = new Task(taskNameValue, taskNoteValue, taskDateValue);
    taskList.push(toDo);
  }
};

export { taskData };
