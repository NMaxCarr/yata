import React, { useEffect, useRef, useState } from "react";
import EditingTemplate from "./EditingPage";
import ViewPage from "./ViewPage";

export interface TodoProps {
  id: string;
  name: string;
  completed?: boolean;
  toggleTaskCompleted: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, newName: string) => void;
}

const Todo: React.FC<TodoProps> = (props) => {
  const { name, id, editTask } = props;

  const editFieldRef = useRef<HTMLInputElement>(null);
  const editButtonRef = useRef<HTMLButtonElement>(null);

  const [isEditing, setEditing] = useState<boolean>();
  const [newName, setNewName] = useState(name);

  const usePrevious = (value: boolean | undefined) => {
    const ref = useRef<boolean>();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const wasEditing = usePrevious(isEditing);

  const isEditingCallback = (value: boolean) => setEditing(value);

  const handleChange = (value: string) => setNewName(value);

  const onSubmitCallback = (event: React.FormEvent) => {
    event.preventDefault();
    editTask(id, newName);
    setNewName("");
    setEditing(false);
  };

  useEffect(() => {
    if (isEditing && editFieldRef.current && !wasEditing) {
      editFieldRef.current.focus();
    } else if (editButtonRef.current && !isEditing && wasEditing) {
      editButtonRef.current.focus();
    }
  }, [isEditing, wasEditing]);

  return (
    <li className="todo stack-small">
      {isEditing ? (
        <EditingTemplate
          name={name}
          id={id}
          editTask={isEditingCallback}
          onValueChange={handleChange}
          onSubmitChange={onSubmitCallback}
          ref={editFieldRef}
        />
      ) : (
        <ViewPage {...props} editTask={isEditingCallback} ref={editButtonRef} />
      )}
    </li>
  );
};

export default Todo;
