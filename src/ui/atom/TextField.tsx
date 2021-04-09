import React from "react";
import { TextField as MaterialUITextField } from "@material-ui/core";
import styled from "styled-components";

const TextField = styled(({ ...props }) => (
  <MaterialUITextField variant="outlined" fullWidth {...props} />
))`
  && {
    margin-right: 3rem;
  }
`;

export default TextField;
