import React, { useState } from "react";
import FilterButton from "./ui/FilterButton";
import Form from "./ui/Form";
import Todo from "./ui/Todo";

const FILTER_MAP: { [key: string]: (e: Task) => void } = {
  All: () => true,
  Active: (task: Task) => !task.completed,
  Completed: (task: Task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

export interface Task {
  id: string;
  name: string;
  completed: boolean;
}

export interface AppProps {
  initialTasks: Task[];
}

const App: React.FC<AppProps> = ({ initialTasks }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("All");

  const addTask = (name: string) => {
    const newTask = { id: "id", name, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompleted = (id: string) => {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id: string) => {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  };

  const headingText = `${tasks.length} tasks remaining`;

  const editTask = (id: string, newName: string) => {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  };

  return (
    <div className="todoapp stack-large">
      <h1>
        <u>Y</u>et <u>A</u>nother <u>T</u>odo <u>A</u>pp
      </h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {FILTER_NAMES.map((name) => (
          <FilterButton
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
          />
        ))}
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {tasks.filter(FILTER_MAP[filter]).map((task) => (
          <Todo
            key={task.id}
            id={task.id}
            name={task.name}
            completed={task.completed}
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
