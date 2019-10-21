import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// ==============================
// =====      Component     =====
// ==============================

function NavBarRight() {
  return (
    <NavRight>
      <StyledNavLink to="/home">Home</StyledNavLink>
      <StyledNavLink to="/quiz">Quizzes</StyledNavLink>
      <StyledNavLink to="/forum">Forum</StyledNavLink>
    </NavRight>
  );
}

export default NavBarRight;

// ==============================
// =====  Styled Component  =====
// ==============================

const NavRight = styled.div`
  @media (max-width: 500px) {
    display: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  transition: all 0.1s ease-in-out;
  color: aqua;
  transform-origin: left;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:hover {
    border-bottom: 2px solid aqua;
    opacity: 0.8;
  }
`;
