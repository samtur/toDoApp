const taskContainer = document.querySelector(".taskContainer");

const displayTask = (taskList) => {
  for (let i in taskList) {
    if (taskList[i].add === true) {
      continue;
    }
    const taskContainer = document.querySelector(".taskContainer");
    const task = document.createElement("div");
    task.classList.add("task");
    task.id = `task${i}`;
  }
};
export { displayTask };
