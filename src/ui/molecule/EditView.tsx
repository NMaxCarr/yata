import {
  FormControl,
  IconButton,
  Input,
  InputLabel,
  useTheme,
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import React, { ReactElement } from "react";
import styled from "styled-components";
import { MyTheme } from "ui/Provider";

interface EditingTemplateProps {
  name: string;
  id: string;
  editTask: (isEditing: boolean) => void;
  onValueChange: (value: string) => void;
  onSubmitChange: (event: React.FormEvent) => void;
  ref: React.MutableRefObject<HTMLInputElement | null>;
}

const InputSection = styled.div`
  display: flex;
`;

const EditView = React.forwardRef<HTMLInputElement, EditingTemplateProps>(
  (
    { name, id, editTask, onValueChange, onSubmitChange },
    ref
  ): ReactElement => {
    const theme = useTheme<MyTheme>();
    return (
      <FormControl style={{ width: "100%", padding: "0 1rem" }}>
        <InputLabel style={{ fontSize: "2rem", position: "inherit" }}>
          {"New name for "}
          {name}
        </InputLabel>
        <InputSection>
          <Input
            id={id}
            defaultValue={name}
            type="text"
            onChange={(event) => onValueChange(event.target.value)}
            ref={ref}
            style={{ width: "100%" }}
          />
          <IconButton
            color="secondary"
            aria-label="cancel"
            size="small"
            onClick={() => editTask(false)}
          >
            <CancelIcon
              style={{ fontSize: "3rem", color: theme.action.cancel }}
            />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="accept"
            size="small"
            type="submit"
            onClick={onSubmitChange}
          >
            <CheckCircleIcon
              style={{ fontSize: "3rem", color: theme.action.accept }}
            />
          </IconButton>
        </InputSection>
      </FormControl>
    );
  }
);

EditView.displayName = "EditView";

export default EditView;
