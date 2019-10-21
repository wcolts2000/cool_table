import React from "react";
import styled from "styled-components";
import back from "../../../img/back.png";

// ==============================
// =====      Component     =====
// ==============================

export default function BackButton(props) {
  return <Img src={back} onClick={() => props.props.history.goBack()} />;
}

// ==============================
// =====  Styled Component  =====
// ==============================

const Img = styled.img`
  width: 30px;
  position: absolute;
  top: 90px;
  left: 15px;
  z-index: 1;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
`;

