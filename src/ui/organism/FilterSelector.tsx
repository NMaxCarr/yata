import React, { ReactElement } from "react";
import styled from "styled-components";
import FilterButton from "ui/molecule/FilterButton";

interface FilterSelectorProps {
  filters: string[];
  filterSelected: string;
  filterSelectedCallback: (filter: string) => void;
}

const FilterSelectorList = styled.div`
  display: flex;
  margin: 1rem 0;
`;

const FilterButtonStyle = styled.span`
  margin-right: 1rem;
`;

const FilterSelector = ({
  filters,
  filterSelected,
  filterSelectedCallback,
}: FilterSelectorProps): ReactElement => {
  return (
    <FilterSelectorList>
      {filters.map((filter) => (
        <FilterButtonStyle key={filter}>
          <FilterButton
            name={filter}
            isPressed={filter === filterSelected}
            setFilter={filterSelectedCallback}
          />
        </FilterButtonStyle>
      ))}
    </FilterSelectorList>
  );
};

export default FilterSelector;
