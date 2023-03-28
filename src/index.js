// Clear local storage
// localStorage.clear();

import "./style.css";
import { appFunc } from "./app";
import {
  taskData,
  taskList,
  todayListener,
  inboxListener,
  weekListener,
  completeListener,
  defaultTaskStorage,
  resetSort,
} from "./taskData";
import { addProject, projects } from "./projects";

defaultTaskStorage();
todayListener(taskList);
inboxListener(taskList);
weekListener(taskList);
completeListener(taskList);
resetSort(taskList);
addProject();
appFunc();
taskData();
projects();
