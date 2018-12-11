import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

// ==============================
// =====  Styled Component  =====
// ==============================

const NavBar = styled.nav`
  width: 100%;
  position: fixed;
  color: white;
  background: #0f0f0f;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavLeft = styled.div``;

const Logo = styled.p`
  font-weight: bolder;
  color: aqua;
  display: inline-block;
  margin-right: 20px;

  & > span {
    font-weight: normal;
    opacity: 0.8;
  }
`;

const NavRight = styled.div``;

const User = styled(Link)`
  display: inline-block;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
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

// ==============================
// =====      Component     =====
// ==============================

export default function Nav(props) {
  return (
    <NavBar>
      <NavLeft>
        <Logo>
          COOL<span>TABLE</span>
        </Logo>
        <User
          to="/"
          style={
            props.isLoggedIn ? { color: "tomato" } : { color: "limeGreen" }
          }
        >
          {props.isLoggedIn ? "LOGOUT" : "LOGIN"}
        </User>
      </NavLeft>
      <NavRight>
        <StyledNavLink to="/home">Home</StyledNavLink>
        <StyledNavLink to="/quiz">Quizzes</StyledNavLink>
        <StyledNavLink to="/forum">Forum</StyledNavLink>
      </NavRight>
    </NavBar>
  );
}
