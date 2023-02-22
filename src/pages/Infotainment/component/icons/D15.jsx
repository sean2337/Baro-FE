import React from "react";
import styled from "styled-components";
import d15 from "./imgs/i15.png";
import IconWrapper from "../IconWrapper";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const D15 = () => {
  return (
    <IconWrapper>
      <StyledImage src={d15} />
    </IconWrapper>
  );
};

export default D15;
