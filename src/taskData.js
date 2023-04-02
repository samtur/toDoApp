import { displayTask } from "./dom";
import { isDone } from "./app";

let taskList = [];
const tableContainer = document.querySelector(".tableContainer");
const projectFormContainer = document.querySelector(".projectFormContainer");
const contentTitle = document.querySelector(".contentTitle");
const monthBtn = document.querySelector("#link2");
const openFormBtn = document.querySelector(".openForm");
const taskFormContainer = document.querySelector(".taskFormContainer");
const todayBtn = document.querySelector("#link1");
const completeBtn = document.querySelector("#link3");
const inboxBtn = document.querySelector("#link0");
const homeBtn = document.querySelector(".homeBtn");

// Functions to retreive and store arrays/objs local storage
Storage.prototype.setObj = function (key, obj) {
  return this.setItem(key, JSON.stringify(obj));
};
Storage.prototype.getObj = function (key) {
  return JSON.parse(this.getItem(key));
};

// Checks local storage upon opening app
const defaultTaskStorage = () => {
  if (localStorage.getItem("tasks") === null) {
    localStorage.setObj("tasks", taskList);
    console.log(localStorage);
  } else {
    taskList = localStorage.getObj("tasks");
    console.log(taskList);
    displayTask(taskList);
  }
};

const taskData = () => {
  const submit = document.querySelector(".submitBtn");
  const taskName = document.querySelector(".taskName");
  const taskNote = document.querySelector(".taskNote");
  const taskDate = document.querySelector(".taskDate");

  function Task(taskName, taskNote, taskDate) {
    this.taskName = taskName;
    this.taskNote = taskNote;
    this.taskDate = taskDate;
    this.done = false;
    this.add = false;
    this.sort = false;
    this.project = contentTitle.innerHTML;
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
    for (let i in taskList) {
      if (taskList[i].project !== contentTitle.innerHTML) {
        document.querySelector(`#checkLabel${i}`).remove();
        document.querySelector(`#taskNameDisplay${i}`).remove();
        document.querySelector(`#taskNoteDisplay${i}`).remove();
        document.querySelector(`#taskDateDisplay${i}`).remove();
        document.querySelector(`#removeBtn${i}`).remove();
        taskList[i].add = false;
      }
      taskList[i].sort = true;
    }
  });

  function addToTaskList(taskNameValue, taskNoteValue, taskDateValue) {
    let toDo = new Task(taskNameValue, taskNoteValue, taskDateValue);
    taskList.push(toDo);
    localStorage.setObj("tasks", taskList);
  }
};

const resetSort = (taskList) => {
  for (let i in taskList) {
    if (taskList[i].sort === true) {
      taskList[i].sort = false;
    }
  }
};

const todayListener = (taskList) => {
  todayBtn.addEventListener("click", function () {
    contentTitle.innerHTML = "Today";
    projectFormContainer.classList.add("hidden");
    tableContainer.classList.remove("hidden");
    openFormBtn.classList.add("hidden");
    taskFormContainer.classList.add("hidden");
    const currentDate = new Date().toJSON().slice(0, 10);
    resetSort(taskList);
    displayTask(taskList);
    for (let i in taskList) {
      isDone(taskList[i], i);
      if (taskList[i].sort === false) {
        const taskDate = document.querySelector(`#taskDateDisplay${i}`);
        if (taskDate.innerHTML !== currentDate) {
          document.querySelector(`#checkLabel${i}`).remove();
          document.querySelector(`#taskNameDisplay${i}`).remove();
          document.querySelector(`#taskNoteDisplay${i}`).remove();
          document.querySelector(`#taskDateDisplay${i}`).remove();
          document.querySelector(`#removeBtn${i}`).remove();
          taskList[i].add = false;
        }
        taskList[i].sort = true;
      }
    }
    localStorage.setObj("tasks", taskList);
    taskList = localStorage.getObj("tasks");
  });
};

const monthListener = (taskList) => {
  monthBtn.addEventListener("click", function () {
    contentTitle.innerHTML = "This Month";
    projectFormContainer.classList.add("hidden");
    tableContainer.classList.remove("hidden");
    openFormBtn.classList.add("hidden");
    taskFormContainer.classList.add("hidden");
    const currentMonth = new Date().toJSON().slice(5, 7);
    resetSort(taskList);
    displayTask(taskList);
    for (let i in taskList) {
      isDone(taskList[i], i);
      if (taskList[i].sort === false) {
        let taskDate = document.querySelector(`#taskDateDisplay${i}`);
        taskDate = taskList[i].taskDate;
        taskDate = taskDate.slice(5, 7);
        if (taskDate != currentMonth) {
          document.querySelector(`#checkLabel${i}`).remove();
          document.querySelector(`#taskNameDisplay${i}`).remove();
          document.querySelector(`#taskNoteDisplay${i}`).remove();
          document.querySelector(`#taskDateDisplay${i}`).remove();
          document.querySelector(`#removeBtn${i}`).remove();
          taskList[i].add = false;
        }
        taskList[i].sort = true;
      }
    }
    localStorage.setObj("tasks", taskList);
    taskList = localStorage.getObj("tasks");
  });
};

const completeListener = (taskList) => {
  completeBtn.addEventListener("click", function () {
    contentTitle.innerHTML = "Completed";
    projectFormContainer.classList.add("hidden");
    tableContainer.classList.remove("hidden");
    openFormBtn.classList.add("hidden");
    taskFormContainer.classList.add("hidden");
    resetSort(taskList);
    displayTask(taskList);
    for (let i in taskList) {
      isDone(taskList[i], i);
      if (taskList[i].done === false) {
        document.querySelector(`#checkLabel${i}`).remove();
        document.querySelector(`#taskNameDisplay${i}`).remove();
        document.querySelector(`#taskNoteDisplay${i}`).remove();
        document.querySelector(`#taskDateDisplay${i}`).remove();
        document.querySelector(`#removeBtn${i}`).remove();
        taskList[i].add = false;
      }
      taskList[i].sort = true;
    }
    localStorage.setObj("tasks", taskList);
    taskList = localStorage.getObj("tasks");
  });
};

const inboxListener = (taskList) => {
  inboxBtn.addEventListener("click", function () {
    contentTitle.innerHTML = "All Tasks";
    projectFormContainer.classList.add("hidden");
    tableContainer.classList.remove("hidden");
    openFormBtn.classList.add("hidden");
    resetSort(taskList);
    displayTask(taskList);
    for (let i in taskList) {
      isDone(taskList[i], i);
      if (taskList[i].sort === false) {
      }
      taskList[i].sort = true;
    }
    localStorage.setObj("tasks", taskList);
    taskList = localStorage.getObj("tasks");
  });
  homeBtn.addEventListener("click", function () {
    contentTitle.innerHTML = "All Tasks";
    projectFormContainer.classList.add("hidden");
    tableContainer.classList.remove("hidden");
    openFormBtn.classList.add("hidden");
    resetSort(taskList);
    displayTask(taskList);
    for (let i in taskList) {
      if (taskList[i].sort === false) {
      }
      isDone(taskList[i], i);
      taskList[i].sort = true;
    }
    localStorage.setObj("tasks", taskList);
    taskList = localStorage.getObj("tasks");
  });
};

export {
  taskData,
  todayListener,
  inboxListener,
  resetSort,
  monthListener,
  completeListener,
  isDone,
  defaultTaskStorage,
};
export { taskList };
