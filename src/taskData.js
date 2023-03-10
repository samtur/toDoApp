import { displayTask } from "./dom";
import { isDone } from "./app";
const taskList = [];

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

const resetSort = (taskList) => {
  for (let i in taskList) {
    if (taskList[i].sort === true) {
      taskList[i].sort = false;
    }
  }
};

const todayListener = (taskList) => {
  const todayBtn = document.querySelector("#link1");
  const openFormBtn = document.querySelector(".openForm");
  const taskFormContainer = document.querySelector(".taskFormContainer");
  todayBtn.addEventListener("click", function () {
    openFormBtn.classList.add("hidden");
    taskFormContainer.classList.add("hidden");
    const currentDate = new Date().toJSON().slice(0, 10);
    resetSort(taskList);
    displayTask(taskList);
    for (let i in taskList) {
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
  });
};

const weekListener = (taskList) => {
  const weekBtn = document.querySelector("#link2");
  const openFormBtn = document.querySelector(".openForm");
  const taskFormContainer = document.querySelector(".taskFormContainer");
  weekBtn.addEventListener("click", function () {
    openFormBtn.classList.add("hidden");
    taskFormContainer.classList.add("hidden");
    const currentDate = new Date();
    const first = currentDate.getDate() - currentDate.getDay() + 1;
    const last = first + 6;
    const firstday = new Date(currentDate.setDate(first)).getDate();
    const lastday = new Date(currentDate.setDate(last)).getDate();
    resetSort(taskList);
    displayTask(taskList);
    for (let i in taskList) {
      if (taskList[i].sort === false) {
        let taskDate = document.querySelector(`#taskDateDisplay${i}`);
        taskDate = taskDate.innerHTML;
        taskDate = Number(taskDate.slice(-2));
        if (taskDate > lastday || taskDate < firstday) {
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
  });
};

const completeListener = (taskList) => {
  const completeBtn = document.querySelector("#link3");
  const openFormBtn = document.querySelector(".openForm");
  const taskFormContainer = document.querySelector(".taskFormContainer");
  completeBtn.addEventListener("click", function () {
    openFormBtn.classList.add("hidden");
    taskFormContainer.classList.add("hidden");
    resetSort(taskList);
    displayTask(taskList);
    for (let i in taskList) {
      if (taskList[i].done === false) {
        document.querySelector(`#checkLabel${i}`).remove();
        document.querySelector(`#taskNameDisplay${i}`).remove();
        document.querySelector(`#taskNoteDisplay${i}`).remove();
        document.querySelector(`#taskDateDisplay${i}`).remove();
        document.querySelector(`#removeBtn${i}`).remove();
        taskList[i].add = false;
      }
      taskList[i].sort = true;
      isDone(taskList[i], i);
    }
  });
};

const inboxListener = (taskList) => {
  const inboxBtn = document.querySelector("#link0");
  const homeBtn = document.querySelector(".homeBtn");
  const openFormBtn = document.querySelector(".openForm");
  inboxBtn.addEventListener("click", function () {
    openFormBtn.classList.remove("hidden");
    resetSort(taskList);
    for (let i in taskList) {
      if (taskList[i].sort === false) {
        displayTask(taskList);
      }
      taskList[i].sort = true;
    }
  });
  homeBtn.addEventListener("click", function () {
    openFormBtn.classList.remove("hidden");
    resetSort(taskList);
    for (let i in taskList) {
      if (taskList[i].sort === false) {
        displayTask(taskList);
      }
      taskList[i].sort = true;
    }
  });
};

export {
  taskData,
  todayListener,
  inboxListener,
  resetSort,
  weekListener,
  completeListener,
};
export { taskList };
