import React, { ReactElement, SyntheticEvent } from "react";
import EditIcon from "@material-ui/icons/Edit";
import { CSSProperties } from "@material-ui/styles";

interface EditActionProps {
  style?: CSSProperties;
  onClick: () => void;
}

const EditAction = ({ style, onClick }: EditActionProps): ReactElement => {
  const editOnClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    onClick();
  };
  return <EditIcon style={style} onClick={editOnClick} />;
};

export default EditAction;
