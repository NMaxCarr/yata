import { Fab, useTheme, withTheme } from "@material-ui/core";
import React, { ReactElement } from "react";
import styled from "styled-components";
import DeleteAction from "ui/atom/DeleteAction";
import EditAction from "ui/atom/EditAction";
import TaskCheck from "ui/atom/TaskCheck";
import { MyTheme } from "ui/Provider";

interface ViewPageProps {
  id: string;
  name: string;
  completed?: boolean;
  toggleTaskCompleted: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (isEditing: boolean) => void;
}

const TaskViewStyled = withTheme(styled(Fab)`
  && {
    background-color: ${(props) => props.theme.palette.primary.light};
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`);

const TaskView = ({
  name,
  id,
  completed = false,
  toggleTaskCompleted,
  deleteTask,
  editTask,
}: ViewPageProps): ReactElement => {
  return (
    <TaskViewStyled variant="extended" onClick={() => toggleTaskCompleted(id)}>
      <TaskCheck label={name} checked={completed} />
      <span>
        <EditAction onClick={() => editTask(true)} />
        <DeleteAction onClick={() => deleteTask(id)} />
      </span>
    </TaskViewStyled>
  );
};

TaskView.displayName = "TaskView";

export default TaskView;
