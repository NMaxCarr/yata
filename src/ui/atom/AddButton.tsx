import Fab from "@material-ui/core/Fab";
import React from "react";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";

const AddButton = styled(({ ...props }) => (
  <Fab aria-label="add" {...props}>
    <AddIcon />
  </Fab>
))``;

export default AddButton;
