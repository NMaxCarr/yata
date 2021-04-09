import React, { ReactElement } from "react";
import styled from "styled-components";
import TaskWidget from "ui/organism/TaskWidget";

const FILTER_MAP: { [key: string]: (e: Task) => void } = {
  All: () => true,
  Active: (task: Task) => !task.completed,
  Completed: (task: Task) => task.completed,
};

export const FILTER_NAMES = Object.keys(FILTER_MAP);

export interface Task {
  id: string;
  name: string;
  completed: boolean;
}

interface TasksListProps {
  tasks: Task[];
  selectedFilter: string;
  toggleTaskCompleted: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, newName: string) => void;
}

const TasksListElementStyle = styled.ul`
  margin: 0;

  li {
    margin: 1.3rem 0;
  }
`;

const TasksList = ({
  tasks,
  selectedFilter,
  toggleTaskCompleted,
  deleteTask,
  editTask,
}: TasksListProps): ReactElement => {
  return (
    <TasksListElementStyle aria-labelledby="list-heading">
      {tasks.filter(FILTER_MAP[selectedFilter]).map((task) => (
        <TaskWidget
          key={task.id}
          id={task.id}
          name={task.name}
          completed={task.completed}
          toggleTaskCompleted={toggleTaskCompleted}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </TasksListElementStyle>
  );
};

export default TasksList;
