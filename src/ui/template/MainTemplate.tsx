import React, { ReactElement } from "react";
import styled from "styled-components";
import VerticalMenuList from "ui/organism/VerticalMenuList";

const Background = styled.div`
  background-image: url("images/christopher-czermak-ulG2K7id26s-unsplash.jpeg");
  background-repeat: no-repeat;
  background-color: #cccccc;
  position: absolute;
  background-size: cover;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const CentralSection = styled.div`
  position: absolute;
  width: 40rem;
  margin: 0;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0%);
  max-height: 90%;
  overflow-y: overlay;
`;

const MainTemplate: React.FC = ({ children }): ReactElement => {
  return (
    <Background>
      <CentralSection>
        <VerticalMenuList>{children}</VerticalMenuList>
      </CentralSection>
      <div style={{ position: "absolute", bottom: "5px", color: "orange" }}>
        {"Photo by "}
        <a
          href="https://unsplash.com/@czermak_photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          style={{ color: "white" }}
        >
          Christopher Czermak
        </a>
        {" on "}
        <a
          href="https://unsplash.com/backgrounds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          style={{ color: "white" }}
        >
          Unsplash
        </a>
      </div>
    </Background>
  );
};

export default MainTemplate;
