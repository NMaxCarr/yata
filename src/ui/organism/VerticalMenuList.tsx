import React, { ReactElement } from "react";
import styled from "styled-components";

import Glassbackdrop from "ui/atom/Glassbackdrop";

const Background = styled(Glassbackdrop)`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const VerticalMenuList: React.FC = ({ children }): ReactElement => {
  return <Background>{children}</Background>;
};

export default VerticalMenuList;
