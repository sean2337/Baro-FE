import React from "react";
import styled from "styled-components";
import d7 from "./imgs/i7.png";
import IconWrapper from "../IconWrapper";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const D7 = () => {
  return (
    <IconWrapper>
      <StyledImage src={d7} />
    </IconWrapper>
  );
};

export default D7;
