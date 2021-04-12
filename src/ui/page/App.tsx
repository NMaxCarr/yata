import React, { useState } from "react";
import HeadingTaskCount from "ui/atom/HeadingTaskCount";
import useStateTask from "ui/hooks/UseStateTask";
import AddInputForm from "ui/molecule/AddInputForm";
import TopMenu from "ui/molecule/TopMenu";
import FilterSelector from "ui/organism/FilterSelector";
import TasksList, { FILTER_NAMES, Task } from "ui/organism/TasksList";
import Provider from "ui/Provider";
import MainTemplate from "ui/template/MainTemplate";
import { v4 as uuidv4 } from "uuid";

const App: React.FC = () => {
  const [tasks, setTasks] = useStateTask();
  const [filter, setFilter] = useState("All");

  const addTask = (name: string) => {
    const newTask = { id: uuidv4(), name, completed: false };
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
    <Provider>
      <MainTemplate>
        <TopMenu title="Yet Another Todo App" />
        <AddInputForm addTask={addTask} />
        <FilterSelector
          filters={FILTER_NAMES}
          filterSelected={filter}
          filterSelectedCallback={setFilter}
        />
        <HeadingTaskCount>{headingText}</HeadingTaskCount>
        <TasksList
          tasks={tasks}
          selectedFilter={filter}
          toggleTaskCompleted={toggleTaskCompleted}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </MainTemplate>
    </Provider>
  );
};

export default App;
