const projectList = [];
const tableContainer = document.querySelector(".tableContainer");
const projectFormContainer = document.querySelector(".projectFormContainer");
const openForm = document.querySelector(".openForm");

const addProject = () => {
  const addProjectBtn = document.querySelector("#link5");
  addProjectBtn.addEventListener("click", function () {
    openForm.classList.add("hidden");
    tableContainer.classList.add("hidden");
    projectFormContainer.classList.remove("hidden");
  });
};

const projects = () => {
  function Project(projectName, dateStart, projectNote) {
    this.projectName = projectName;
    this.dateStart = dateStart;
    this.projectNote = projectNote;
  }
};

export { projects, addProject };
