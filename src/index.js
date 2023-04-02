// Clear local storage
localStorage.clear();

import "./style.css";
import { appFunc } from "./app";
import {
  taskData,
  taskList,
  todayListener,
  inboxListener,
  monthListener,
  completeListener,
  defaultTaskStorage,
  resetSort,
} from "./taskData";
import { addProject, projects } from "./projects";

defaultTaskStorage();
todayListener(taskList);
inboxListener(taskList);
monthListener(taskList);
completeListener(taskList);
resetSort(taskList);
addProject();
appFunc();
taskData();
projects();
