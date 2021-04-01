import React, { ReactElement } from "react";

interface EditingTemplateProps {
  name: string;
  id: string;
  editTask: (isEditing: boolean) => void;
  onValueChange: (value: string) => void;
  onSubmitChange: (event: React.FormEvent) => void;
  ref: React.MutableRefObject<HTMLInputElement | null>;
}

const EditingTemplate = ({
  name,
  id,
  editTask,
  onValueChange,
  onSubmitChange,
  ref,
}: EditingTemplateProps): ReactElement => {
  return (
    <form className="stack-small" onSubmit={(event) => onSubmitChange(event)}>
      <div className="form-group">
        <label className="todo-label" htmlFor={id}>
          {"New name for "}
          {name}
        </label>
        <input
          id={id}
          defaultValue={name}
          className="todo-text"
          type="text"
          onChange={(event) => onValueChange(event.target.value)}
          ref={ref}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => editTask(false)}
        >
          Cancel
          <span className="visually-hidden">renaming {name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {name}</span>
        </button>
      </div>
    </form>
  );
};

export default EditingTemplate;
