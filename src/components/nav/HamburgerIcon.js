import React from "react";
import styled from "styled-components";

// ==============================
// =====  Styled Component  =====
// ==============================

const Hamburger = styled.div`
  width: 27px;
  height: ${props => (props.mobilenavopen === "open" ? 0 : "3px")};
  border-radius: 50px;
  background: #0f0f0f;
  position: absolute;
  right: 88px;
  display: none;
  z-index: 100;
  pointer-events: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  &::before,
  &::after {
    border-radius: 50px;
    content: "";
    display: inherit;
    position: absolute;
    width: 27px;
    height: 3px;
    background: #0f0f0f;
    padding: 0;
    margin: 0;
    transition: all 0.3s ease-in-out;
  }

  &::before {
    top: ${props => (props.mobilenavopen === "open" ? 0 : "-7px")};
    transform: ${props =>
      props.mobilenavopen === "open" ? "rotate(405deg)" : null};
  }

  &::after {
    top: ${props => (props.mobilenavopen === "open" ? 0 : "7px")};
    transform: ${props =>
      props.mobilenavopen === "open" ? "rotate(-405deg)" : null};
  }
  @media (max-width: 500px) {
    display: initial;
  }
`;

const Backplate = styled.div`
  position: absolute;
  background: papayawhip;
  right: 82px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 500px) {
    display: initial;
  }
`;

// ==============================
// =====      Component     =====
// ==============================

function HamburgerIcon({ mobilenavopen, navOpen }) {
  return (
    <>
      <Hamburger mobilenavopen={mobilenavopen === "open" ? "open" : "closed"}>
        &nbsp;
      </Hamburger>
      <Backplate onClick={() => navOpen(mobilenavopen)}>&nbsp;</Backplate>
    </>
  );
}

export default HamburgerIcon;
