import React from "react";
import styled from "styled-components";

import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/onlineIcon.png";

const InfoBar = ({ room }: any) => (
  <Wrap>
    <LeftContainer>
      <OutLineIcon src={onlineIcon} alt="online image" />
      <h3>{room}</h3>
    </LeftContainer>
    <RightContainer>
      <a href="/">
        <img src={closeIcon} alt="close img" />
      </a>
    </RightContainer>
  </Wrap>
);

export default InfoBar;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2979ff;
  border-radius: 4px 4px 0px 0px;
  height: 60px;
  width: 100%;
`;

const LeftContainer = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  margin-left: 5%;
  color: #fff;
`;

const RightContainer = styled.div`
  display: flex;
  flex: 0.5px;
  justify-content: flex-end;
  margin-right: 5%;
`;

const OutLineIcon = styled.img`
  margin-right: 5%;
`;
