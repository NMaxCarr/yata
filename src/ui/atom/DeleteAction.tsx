import React, { ReactElement, SyntheticEvent } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { CSSProperties } from "@material-ui/styles";

interface DeleteActionProps {
  style?: CSSProperties;
  onClick: () => void;
}

const DeleteAction = ({ style, onClick }: DeleteActionProps): ReactElement => {
  const deleteOnClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    onClick();
  };
  return <DeleteIcon style={style} onClick={deleteOnClick} />;
};

export default DeleteAction;
