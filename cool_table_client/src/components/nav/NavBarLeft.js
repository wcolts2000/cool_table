import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// ==============================
// =====  Styled Component  =====
// ==============================

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

const User = styled(Link)`
  display: inline-block;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-right: 5px;

  &:hover {
    opacity: 0.7;
  }
`;

// ==============================
// =====      Component     =====
// ==============================

function NavBarLeft({ isLoggedIn }) {
  return (
    <div>
      <Link to="/">
        <Logo>
          COOL<span>TABLE</span>
        </Logo>
      </Link>
      <User
        to={isLoggedIn ? "/logout" : "/login"}
        style={isLoggedIn ? { color: "tomato" } : { color: "limeGreen" }}
      >
        {isLoggedIn ? "LOGOUT" : "LOGIN"}
      </User>
      {isLoggedIn ? null : (
        <User
          to="/register"
          style={{ textTransform: "uppercase", color: "tomato" }}
        >
          Register
        </User>
      )}
    </div>
  );
}

export default NavBarLeft;
