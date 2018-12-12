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
  z-index: 200;

  @media (max-width: 500px) {
    justify-content: flex-start;
    padding-left: 20px;
  }
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

const NavRight = styled.div`
  @media (max-width: 500px) {
    display: none;
  }
`;

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

const Hamburger = styled.div`
  width: 27px;
  height: 3px;
  border-radius: 50px;
  background: #0f0f0f;
  position: absolute;
  right: 88px;
  display: none;
  z-index: 100;
  pointer-events: none;

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
  }

  &::before {
    top: -7px;
  }

  &::after {
    top: 7px;
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

const Mobile = styled.div`
  background: #0f0f0f;
  width: 100%;
  text-align: center;
  letter-spacing: 3px;
  font-size: 20px;
  flex-direction: column;
  transition: all 0.6s ease-in-out;
  height: ${props => (props.mobileNavOpen ? "auto" : 0)};
  padding-top: ${props => (props.mobileNavOpen ? "70px" : null)};
  display: flex;
  box-shadow: ${props =>
    props.mobileNavOpen ? "1 3 60 rgba(0,200,220,.6)" : null};
  position: fixed;
`;

const MobileStyledNavLink = styled(Link)`
  text-decoration: none;
  color: aqua;
  font-weight: bolder;
  padding: 25px 0;
  text-transform: uppercase;
  border-bottom: 2px solid aqua;
  transition: all 0.3s ease-in-out;
  height: ${props => (props.mobileNavOpen ? "auto" : 0)};
  opacity: ${props => (props.mobileNavOpen ? 1 : 0)};
  pointer-events: ${props => (props.mobileNavOpen ? "initial" : "none")};

  &:first-child {
    border-top: 2px solid aqua;
  }

  &:hover {
    background: aqua;
    color: #0f0f0f;
  }
`;

// ==============================
// =====      Component     =====
// ==============================

export default function Nav({ isLoggedIn, mobileNavOpen, navOpen }) {
  return (
    <>
      <NavBar>
        <NavLeft>
          <Logo>
            COOL<span>TABLE</span>
          </Logo>
          <User
            to="/"
            style={isLoggedIn ? { color: "tomato" } : { color: "limeGreen" }}
          >
            {isLoggedIn ? "LOGOUT" : "LOGIN"}
          </User>
        </NavLeft>
        <NavRight>
          <StyledNavLink to="/home">Home</StyledNavLink>
          <StyledNavLink to="/quiz">Quizzes</StyledNavLink>
          <StyledNavLink to="/forum">Forum</StyledNavLink>
        </NavRight>
        <Hamburger>&nbsp;</Hamburger>
        <Backplate onClick={() => navOpen()}>&nbsp;</Backplate>
      </NavBar>
      <Mobile mobileNavOpen={mobileNavOpen}>
        <MobileStyledNavLink mobileNavOpen={mobileNavOpen} to="/home">
          Home
        </MobileStyledNavLink>
        <MobileStyledNavLink mobileNavOpen={mobileNavOpen} to="/quiz">
          Quizzes
        </MobileStyledNavLink>
        <MobileStyledNavLink mobileNavOpen={mobileNavOpen} to="/forum">
          Forum
        </MobileStyledNavLink>
      </Mobile>
    </>
  );
}
