import { resetSort } from "./taskData";
import { taskList } from "./taskData";
import { displayTask } from "./dom";
import { isDone } from "./taskData";

// CODE TO STORE ON LOCAL STORAGE
Storage.prototype.setObj = function (key, obj) {
  return this.setItem(key, JSON.stringify(obj));
};
Storage.prototype.getObj = function (key) {
  return JSON.parse(this.getItem(key));
};
// EXAMPLE OF CODE
// localStorage.setObj("projects", projectList);
// projectList = localStorage.getObj("projects");

// Projects Array
let projectList = [];
// Query Selectors
const tableContainer = document.querySelector(".tableContainer");
const projectFormContainer = document.querySelector(".projectFormContainer");
const openForm = document.querySelector(".openForm");
const contentTitle = document.querySelector(".contentTitle");
const projectSideUl = document.querySelector(".projectSideUl");
const submitProjectBtn = document.querySelector(".submitProjectBtn");
const closeProjectBtn = document.querySelector(".closeProjectBtn");
const projectName = document.querySelector(".projectName");
const projectNote = document.querySelector(".projectNote");
const projectDate = document.querySelector(".projectDate");

// Add Project Btn
const addProject = () => {
  const addProjectBtn = document.querySelector("#link5");
  addProjectBtn.addEventListener("click", function () {
    contentTitle.innerHTML = "Add New Project";
    document.querySelector(".taskFormContainer").classList.add("hidden");
    openForm.classList.add("hidden");
    tableContainer.classList.add("hidden");
    projectFormContainer.classList.remove("hidden");
  });
};

// Display Project in Sidebar
const displayProject = (projectList, projectName, tasks) => {
  projectSideUl.innerHTML = "";
  for (let i in projectList) {
    if (projectList[i].add === true) {
      continue;
    }
    const projectSidebar = document.createElement("li");
    projectSidebar.classList.add("projectSide");
    projectSidebar.id = `projectLink${i}`;
    projectSidebar.innerHTML = projectList[i].projectName;
    projectSideUl.appendChild(projectSidebar);
    projectList[i].add = true;
    projectPage(projectSidebar, projectList[i], taskList);
    document.querySelector(".contentTitle").innerHTML = projectName;
    openForm.classList.remove("hidden");
    tableContainer.classList.remove("hidden");
    projectFormContainer.classList.add("hidden");
    resetSort(tasks);
    displayTask(tasks);
    for (let i in tasks) {
      isDone(tasks[i], i);
      if (tasks[i].project !== contentTitle.innerHTML) {
        document.querySelector(`#checkLabel${i}`).remove();
        document.querySelector(`#taskNameDisplay${i}`).remove();
        document.querySelector(`#taskNoteDisplay${i}`).remove();
        document.querySelector(`#taskDateDisplay${i}`).remove();
        document.querySelector(`#removeBtn${i}`).remove();
        tasks[i].add = false;
      }
      tasks[i].sort = true;
    }
  }
  for (let i in projectList) {
    projectList[i].add = false;
  }
  localStorage.setObj("projects", projectList);
  projectList = localStorage.getObj("projects");
  resetSort(tasks);
};

// Project Constructor, eventlistener for submit and pushing to project array
const projects = () => {
  createDefaultProject();
  function Project(projectName, projectNote, projectDate) {
    this.projectName = projectName;
    this.projectNote = projectNote;
    this.projectDate = projectDate;
    this.projectTasks = [];
    this.add = false;
  }

  submitProjectBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (projectName.value === "" || projectDate.value === "") {
      return;
    }
    let projectNameValue = projectName.value;
    let projectNoteValue = projectNote.value;
    let projectDateValue = projectDate.value;
    projectName.value = "";
    projectNote.value = "";
    projectDate.value = "";
    addToProjectArr(projectNameValue, projectNoteValue, projectDateValue);
    displayProject(projectList, projectNameValue, taskList);
  });

  closeProjectBtn.addEventListener("click", function (e) {
    projectName.value = "";
    projectNote.value = "";
    projectDate.value = "";
  });

  function addToProjectArr(
    projectNameValue,
    projectNoteValue,
    projectDateValue
  ) {
    let project = new Project(
      projectNameValue,
      projectNoteValue,
      projectDateValue
    );
    projectList.push(project);
    localStorage.setObj("projects", projectList);
    projectList = localStorage.getObj("projects");
    console.log(localStorage.getObj("projects"));
  }

  function createDefaultProject() {
    if (localStorage.getItem("projects") === null) {
      const currentDate = new Date().toJSON().slice(0, 10);
      let projectName = "My Project";
      let projectNote = "My Project";
      let projectDate = currentDate;
      addToProjectArr(projectName, projectNote, projectDate);
      for (let i in projectList) {
        if (projectList[i].add === true) {
          continue;
        }
        const projectSidebar = document.createElement("li");
        projectSidebar.classList.add("projectSide");
        projectSidebar.id = `projectLink${i}`;
        projectSidebar.innerHTML = projectList[i].projectName;
        projectSideUl.appendChild(projectSidebar);
        projectList[i].add = true;
        projectPage(projectSidebar, projectList[i], taskList);
        openForm.classList.remove("hidden");
        tableContainer.classList.remove("hidden");
        projectFormContainer.classList.add("hidden");
      }
      contentTitle.innerHTML = projectName;
    } else {
      projectList = localStorage.getObj("projects");
      document.querySelector(".contentTitle").innerHTML =
        projectList[0].projectName;
      for (let i in projectList) {
        if (projectList[i].add === true) {
          continue;
        }
        const projectSidebar = document.createElement("li");
        projectSidebar.classList.add("projectSide");
        projectSidebar.id = `projectLink${i}`;
        projectSidebar.innerHTML = projectList[i].projectName;
        projectSideUl.appendChild(projectSidebar);
        projectList[i].add = true;
        projectPage(projectSidebar, projectList[i], taskList);
        openForm.classList.remove("hidden");
        tableContainer.classList.remove("hidden");
        projectFormContainer.classList.add("hidden");
      }
      for (let i in projectList) {
        projectList[i].add = false;
      }
      resetSort(taskList);
      for (let i in taskList) {
        isDone(taskList[i], i);
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
      resetSort(taskList);
      localStorage.setObj("projects", projectList);
      projectList = localStorage.getObj("projects");
    }
  }
};

// Project Link Functionality
const projectPage = (btn, project, taskList) => {
  btn.addEventListener("click", function () {
    document.querySelector(".contentTitle").innerHTML = project.projectName;
    document.querySelector(".openForm").classList.remove("hidden");
    document.querySelector(".taskFormContainer").classList.add("hidden");
    document.querySelector(".projectFormContainer").classList.add("hidden");
    document.querySelector(".tableContainer").classList.remove("hidden");
    resetSort(taskList);
    displayTask(taskList);
    for (let i in taskList) {
      isDone(taskList[i], i);
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
    resetSort(taskList);
  });
};

export { projects, addProject };
