import { taskList } from "./taskData";

Storage.prototype.setObj = function (key, obj) {
  return this.setItem(key, JSON.stringify(obj));
};
Storage.prototype.getObj = function (key) {
  return JSON.parse(this.getItem(key));
};

// App Functionality
const appFunc = () => {
  const addBtn = document.querySelector(".openForm");
  const closeBtn = document.querySelector(".closeBtn");
  const formContainer = document.querySelector(".taskFormContainer");
  const menuBtn = document.querySelector(".menuBtn");
  const sideBar = document.querySelector(".sidebar");
  const content = document.querySelector(".content");

  menuBtn.addEventListener("click", function () {
    if (sideBar.classList.contains("hidden")) {
      sideBar.classList.remove("hidden");
      content.classList.remove("contentWide");
    } else {
      sideBar.classList.add("hidden");
      content.classList.add("contentWide");
    }
  });

  addBtn.addEventListener("click", function () {
    addBtn.classList.add("hidden");
    formContainer.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", function () {
    addBtn.classList.remove("hidden");
    formContainer.classList.add("hidden");
  });
};
// Task Functionality
const checkOff = (btn, taskInd, nameDis, noteDis, dateDis, tasks) => {
  btn.addEventListener("click", function () {
    if (taskInd.done === false) {
      taskInd.done = true;
      localStorage.setObj("tasks", tasks);
      tasks = localStorage.getObj("tasks");
      taskList = tasks;
      nameDis.classList.add("crossout");
      nameDis.classList.add("thin");
      noteDis.classList.add("thin");
      dateDis.classList.add("thin");
    } else {
      taskInd.done = false;
      localStorage.setObj("tasks", tasks);
      tasks = localStorage.getObj("tasks");
      taskList = tasks;
      nameDis.classList.remove("crossout");
      nameDis.classList.remove("thin");
      noteDis.classList.remove("thin");
      dateDis.classList.remove("thin");
    }
  });
};

const isDone = (task, index) => {
  if (task.done === true) {
    const nameDis = document.querySelector(`#taskNameDisplay${index}`);
    const noteDis = document.querySelector(`#taskNoteDisplay${index}`);
    const dateDis = document.querySelector(`#taskDateDisplay${index}`);
    const btn = document.querySelector(`#checkBox${index}`);
    btn.checked = true;
    nameDis.classList.add("crossout");
    nameDis.classList.add("thin");
    noteDis.classList.add("thin");
    dateDis.classList.add("thin");
  }
};

const removeTask = (btn, indNum) => {
  btn.addEventListener("click", function () {
    let index = indNum;
    taskList.splice(index, 1);
    console.log(taskList);
    document.querySelector(`#checkLabel${indNum}`).remove();
    document.querySelector(`#taskNameDisplay${indNum}`).remove();
    document.querySelector(`#taskNoteDisplay${indNum}`).remove();
    document.querySelector(`#taskDateDisplay${indNum}`).remove();
    document.querySelector(`#removeBtn${indNum}`).remove();
    localStorage.setObj("tasks", taskList);
    taskList = localStorage.getObj("tasks");
  });
};

export { appFunc, checkOff, removeTask, isDone };
