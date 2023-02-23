const taskData = () => {
  const submit = document.querySelector(".submitTaskBtn");
  const taskName = document.querySelector(".taskName");
  const taskNote = document.querySelector(".taskNote");
  const taskDate = document.querySelector(".taskDate");

  let taskList = [];

  function Task(taskName, taskNote, taskDate) {
    this.taskName = taskName;
    this.taskNote = taskNote;
    this.taskDate = taskDate;
  }

  submit.addEventListener("click", function (e) {
    e.preventDefault();
    let taskNameValue = taskName.value;
    let taskNoteValue = taskNote.value;
    let taskDateValue = taskDate.value;
    addToTaskList(taskNameValue, taskNoteValue, taskDateValue);
  });

  function addToTaskList(taskNameValue, taskNoteValue, taskDateValue) {
    let toDo = new Task(taskNameValue, taskNoteValue, taskDateValue);
    taskList.push(toDo);
    console.log(taskList);
  }
};

export { taskData };
