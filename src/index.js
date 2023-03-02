import "./style.css";
import { appFunc } from "./app";
import { taskData, taskList } from "./taskData";
import { resetSort, todayListener, inboxListener } from "./app";

// domFunc();
resetSort(taskList);
todayListener(taskList);
inboxListener(taskList);
appFunc();
taskData();
