import { Chip, useTheme } from "@material-ui/core";
import React, { ReactElement } from "react";
import { MyTheme } from "ui/Provider";

interface FilterButtonProps {
  name: string;
  isPressed: boolean;
  setFilter: (value: string) => void;
}

const FilterButton = ({
  name,
  isPressed,
  setFilter,
}: FilterButtonProps): ReactElement => {
  const theme = useTheme<MyTheme>();
  return (
    <Chip
      label={name}
      onClick={() => setFilter(name)}
      style={{
        backgroundColor: isPressed ? theme.palette.primary.dark : "#E0E0E0",
      }}
    />
  );
};

export default FilterButton;
