import React, { ReactElement } from "react";
import styled from "styled-components";

const HeadingStyle = styled.h2`
  margin: 0;
`;

const HeadingTaskCount: React.FC = ({ children }): ReactElement => {
  return <HeadingStyle>{children}</HeadingStyle>;
};

export default HeadingTaskCount;
