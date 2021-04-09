import React from "react";
import ReactDOM from "react-dom";
import { Task } from "ui/organism/TasksList";
import App from "ui/page/App";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

const DATA: Task[] = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

ReactDOM.render(
  <React.StrictMode>
    <App initialTasks={DATA} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
