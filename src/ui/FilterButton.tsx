import React, { ReactElement } from "react";
import { Button } from "./button";

interface FilterButtonProps {
  key: string;
  name: string;
  isPressed: boolean;
  setFilter: (value: string) => void;
}

const FilterButton = ({
  key,
  name,
  isPressed,
  setFilter,
}: FilterButtonProps): ReactElement => {
  return (
    <Button
      className="btn toggle-btn"
      aria-pressed={isPressed}
      onClick={() => setFilter(name)}
    >
      <span className="visually-hidden">Show </span>
      <span>{name}</span>
      <span className="visually-hidden"> tasks</span>
    </Button>
  );
};

export default FilterButton;
