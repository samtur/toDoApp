import "./style.css";
import { appFunc } from "./app";
import {
  taskData,
  taskList,
  resetSort,
  todayListener,
  inboxListener,
  weekListener,
} from "./taskData";

// domFunc();
resetSort(taskList);
todayListener(taskList);
inboxListener(taskList);
weekListener(taskList);
appFunc();
taskData();
