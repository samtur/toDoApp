import { displayTask } from "./dom";
import { taskList } from "./taskData";

const appFunc = () => {
  const addBtn = document.querySelector(".openForm");
  const closeBtn = document.querySelector(".closeBtn");
  const formContainer = document.querySelector(".taskFormContainer");
  const submitBtn = document.querySelector(".submitBtn");
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

const checkOff = (btn, taskInd, nameDis, noteDis, dateDis) => {
  btn.addEventListener("click", function () {
    if (taskInd.done === false) {
      console.log(taskInd);
      taskInd.done = true;
      nameDis.classList.add("crossout");
      nameDis.classList.add("thin");
      noteDis.classList.add("thin");
      dateDis.classList.add("thin");
    } else {
      taskInd.done = false;
      nameDis.classList.remove("crossout");
      nameDis.classList.remove("thin");
      noteDis.classList.remove("thin");
      dateDis.classList.remove("thin");
    }
  });
};

const removeTask = (btn, taskInd, indNum, list) => {
  btn.addEventListener("click", function () {
    let index = list.indexOf(taskInd);
    if (index !== -1) {
      list.splice(index, 1);
    }
    document.querySelector(`#checkLabel${indNum}`).remove();
    document.querySelector(`#taskNameDisplay${indNum}`).remove();
    document.querySelector(`#taskNoteDisplay${indNum}`).remove();
    document.querySelector(`#taskDateDisplay${indNum}`).remove();
    document.querySelector(`#removeBtn${indNum}`).remove();
  });
};

const resetSort = (taskList) => {
  for (let i in taskList) {
    if (taskList[i].sort === true) {
      taskList[i].sort = false;
    }
  }
};

const todayListener = (taskList) => {
  const todayBtn = document.querySelector("#viewToday");
  todayBtn.addEventListener("click", function () {
    resetSort(taskList);
    const currentDate = new Date().toJSON().slice(0, 10);
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

const inboxListener = (taskList) => {
  const inboxBtn = document.querySelector("#viewInbox");
  const homeBtn = document.querySelector(".homeBtn");
  inboxBtn.addEventListener("click", function () {
    console.log(taskList);
    resetSort(taskList);
    for (let i in taskList) {
      if (taskList[i].sort === false) {
        displayTask(taskList);
      }
      taskList[i].sort = true;
    }
  });
  homeBtn.addEventListener("click", function () {
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
  appFunc,
  checkOff,
  removeTask,
  todayListener,
  inboxListener,
  resetSort,
};
