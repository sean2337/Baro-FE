import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 33px;
  overflow: hidden;
  background-color: #bebebe;
  margin: 15px;
`;

const IconWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default IconWrapper;
