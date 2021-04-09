import { useTheme } from "@material-ui/styles";
import React, { ChangeEvent, ReactElement, useState } from "react";
import styled from "styled-components";
import AddButton from "ui/atom/AddButton";
import TextField from "ui/atom/TextField";
import { MyTheme } from "ui/Provider";

interface FormProps {
  addTask: (e: string) => void;
}

const AddForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddButtonStyle = styled(AddButton)`
  && {
    transform: scale(0.75);
  }
`;

const AddInputForm = ({ addTask }: FormProps): ReactElement => {
  const theme = useTheme<MyTheme>();
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    addTask(name);
    setName("");
  };

  const handleChange = (newValue: ChangeEvent<HTMLInputElement>) => {
    setName(newValue.target.value);
  };

  return (
    <AddForm onSubmit={handleSubmit}>
      <TextField
        type="text"
        id="new-todo-input"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
        style={{ margin: "auto", marginLeft: "1rem" }}
      />
      <div style={{ right: "1rem" }}>
        <AddButtonStyle
          type="submit"
          style={{ backgroundColor: theme.action.add }}
        />
      </div>
    </AddForm>
  );
};

export default AddInputForm;
