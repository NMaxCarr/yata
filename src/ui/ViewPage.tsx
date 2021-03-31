import React, { ReactElement } from "react";

interface ViewPageProps {
  id: string;
  name: string;
  completed?: boolean;
  toggleTaskCompleted: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (isEditing: boolean) => void;
  ref: React.MutableRefObject<HTMLButtonElement | null>;
}

const ViewTemplate = ({
  name,
  id,
  completed = false,
  toggleTaskCompleted,
  deleteTask,
  editTask,
  ref,
}: ViewPageProps): ReactElement => {
  return (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={id}
          type="checkbox"
          defaultChecked={completed}
          onChange={() => toggleTaskCompleted(id)}
        />
        <label className="todo-label" htmlFor={id}>
          {name}
        </label>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn"
          onClick={() => editTask(true)}
          ref={ref}
        >
          Edit <span className="visually-hidden">{name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => deleteTask(id)}
        >
          Delete <span className="visually-hidden">{name}</span>
        </button>
      </div>
    </div>
  );
};

export default ViewTemplate;
