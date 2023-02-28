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

export { appFunc, checkOff, removeTask };
