import "./style.css";
import { appFunc } from "./app";
import {
  taskData,
  taskList,
  resetSort,
  todayListener,
  inboxListener,
  weekListener,
  completeListener,
  getTasks,
  saveTasks,
} from "./taskData";
import { addProject, projects } from "./projects";
import { displayTask } from "./dom";

// domFunc();
getTasks(taskList);
resetSort(taskList);
todayListener(taskList);
inboxListener(taskList);
weekListener(taskList);
completeListener(taskList);
addProject();
appFunc();
taskData();
projects();
// Clear local storage
// localStorage.clear();
