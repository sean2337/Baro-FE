import React from "react";
import styled from "styled-components";
import youtube from "./imgs/youtube.png";
import IconWrapper from "../IconWrapper";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Youtube = () => {
  return (
    <IconWrapper>
      <StyledImage src={youtube} />
    </IconWrapper>
  );
};

export default Youtube;