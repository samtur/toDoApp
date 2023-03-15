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
} from "./taskData";
import { addProject, projects } from "./projects";

// domFunc();
resetSort(taskList);
todayListener(taskList);
inboxListener(taskList);
weekListener(taskList);
completeListener(taskList);
addProject();
appFunc();
taskData();
projects();
