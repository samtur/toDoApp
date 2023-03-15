// Projects Array
const projectList = [];
// Query Selectors
const tableContainer = document.querySelector(".tableContainer");
const projectFormContainer = document.querySelector(".projectFormContainer");
const openForm = document.querySelector(".openForm");
const contentTitle = document.querySelector(".contentTitle");
const projectSideUl = document.querySelector(".projectSideUl");
// Add Project Btn
const addProject = () => {
  const addProjectBtn = document.querySelector("#link5");
  addProjectBtn.addEventListener("click", function () {
    contentTitle.innerHTML = "Add New Project";
    openForm.classList.add("hidden");
    tableContainer.classList.add("hidden");
    projectFormContainer.classList.remove("hidden");
  });
};
// Display Project in Sidebar
const displayProject = (projectList) => {
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
    projectPage(projectSidebar, projectList[i]);
  }
};
// Project Constructor, eventlistener for submit and pushing to project array
const projects = () => {
  createDefaultProject();
  const submitProjectBtn = document.querySelector(".submitProjectBtn");
  const closeProjectBtn = document.querySelector(".closeProjectBtn");
  const projectName = document.querySelector(".projectName");
  const projectNote = document.querySelector(".projectNote");
  const projectDate = document.querySelector(".projectDate");

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
    displayProject(projectList);
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
  }

  function createDefaultProject() {
    const currentDate = new Date().toJSON().slice(0, 10);
    let projectName = "My Project";
    let projectNote = "My Project";
    let projectDate = currentDate;
    addToProjectArr(projectName, projectNote, projectDate);
    displayProject(projectList);
    contentTitle.innerHTML = projectName;
    console.log(projectList);
  }
};
// Project Link Functionality
const projectPage = (btn, project) => {
  btn.addEventListener("click", function () {
    document.querySelector(".contentTitle").innerHTML = project.projectName;
    document.querySelector(".openForm").classList.remove("hidden");
  });
};

export { projects, addProject };
