import { Checkbox, FormControlLabel } from "@material-ui/core";
import React, { ReactElement } from "react";
import styled from "styled-components";

interface CheckboxProps {
  checked: boolean;
  label: string;
}

const CheckboxStyled = styled(({ ...rest }) => <Checkbox {...rest} />)`
  &.MuiIconButton-colorSecondary:hover {
    background-color: inherit;
  }
  &.MuiCheckbox-colorSecondary.Mui-checked:hover {
    background-color: inherit;
  }
`;

const TaskCheck = ({ checked, label }: CheckboxProps): ReactElement => {
  return (
    <FormControlLabel
      control={<CheckboxStyled checked={checked} name={label} disableRipple />}
      label={label}
      style={{ pointerEvents: "none" }}
    />
  );
};

export default TaskCheck;
