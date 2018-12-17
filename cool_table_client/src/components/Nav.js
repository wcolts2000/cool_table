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

const Mobile = styled.div`
  background: #0f0f0f;
  width: 100%;
  text-align: center;
  letter-spacing: 3px;
  font-size: 20px;
  flex-direction: column;
  transition: all 0.6s ease-in-out;
  height: ${props => (props.mobilenavopen === "open" ? "auto" : 0)};
  padding-top: ${props => (props.mobilenavopen === "open" ? "70px" : null)};
  display: flex;
  box-shadow: ${props =>
    props.mobilenavopen === "open" ? "1px 3px 60px rgba(0,200,220,.6)" : null};
  position: fixed;
  z-index: 100;
`;

const MobileStyledNavLink = styled(Link)`
  text-decoration: none;
  z-index: 150;
  color: aqua;
  font-weight: bolder;
  padding: 25px 0;
  text-transform: uppercase;
  border-bottom: 2px solid aqua;
  transition: all 0.3s ease-in-out;
  height: ${props => (props.mobilenavopen === "open" ? "auto" : 0)};
  opacity: ${props => (props.mobilenavopen === "open" ? 1 : 0)};
  pointer-events: ${props =>
    props.mobilenavopen === "open" ? "initial" : "none"};

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

export default function Nav({ isLoggedIn, navOpen, mobilenavopen }) {
  return (
    <>
      <NavBar>
        <NavLeft>
          <Logo>
            COOL<span>TABLE</span>
          </Logo>
          <User
            to={isLoggedIn ? "/logout" : "/login"}
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
        <Hamburger mobilenavopen={mobilenavopen === "open" ? "open" : "closed"}>
          &nbsp;
        </Hamburger>
        <Backplate onClick={() => navOpen(mobilenavopen)}>&nbsp;</Backplate>
      </NavBar>
      <Mobile mobilenavopen={mobilenavopen === "open" ? "open" : "closed"}>
        <MobileStyledNavLink
          mobilenavopen={mobilenavopen === "open" ? "open" : "closed"}
          to="/home"
          onClick={() => navOpen(mobilenavopen)}
        >
          Home
        </MobileStyledNavLink>
        <MobileStyledNavLink
          mobilenavopen={mobilenavopen === "open" ? "open" : "closed"}
          to="/quiz"
          onClick={() => navOpen(mobilenavopen)}
        >
          Quizzes
        </MobileStyledNavLink>
        <MobileStyledNavLink
          mobilenavopen={mobilenavopen === "open" ? "open" : "closed"}
          to="/forum"
          onClick={() => navOpen(mobilenavopen)}
        >
          Forum
        </MobileStyledNavLink>
      </Mobile>
    </>
  );
}
