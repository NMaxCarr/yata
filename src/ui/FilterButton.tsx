import React, { ReactElement } from "react";

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
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={isPressed}
      onClick={() => setFilter(name)}
    >
      <span className="visually-hidden">Show </span>
      <span>{name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
};

export default FilterButton;
