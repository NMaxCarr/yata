import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import React, { ReactElement } from "react";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import styled from "styled-components";

interface TopMenuProps {
  title: string;
}

const TopMenuBar = styled(({ ...props }) => (
  <AppBar position="static" {...props} />
))`
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const TopMenu = ({ title }: TopMenuProps): ReactElement => {
  return (
    <TopMenuBar>
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="open drawer">
          <MenuRoundedIcon fontSize="large" />
        </IconButton>
        <Typography variant="h5">{title}</Typography>
      </Toolbar>
    </TopMenuBar>
  );
};

export default TopMenu;
