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

const Img = styled.img`
  height: 35px;
  width: 35px;
  position: absolute;
  top: 19px;
  object-fit: cover;
  border-radius: 50%;
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

function NavBarLeft({ isLoggedIn, user: { img_url } }) {
  return (
    <div>
      <Link to="/">
        <Logo>
          COOL<span>TABLE</span>
        </Logo>
      </Link>
      {isLoggedIn ? (
        <Link to="/">
          <Img src={img_url} alt="user avatar" />
        </Link>
      ) : (
        <User
          to="/register"
          style={{ textTransform: "uppercase", color: "tomato" }}
        >
          Register
        </User>
      )}
      <User
        to={isLoggedIn ? "/logout" : "/login"}
        style={
          isLoggedIn
            ? { color: "tomato", paddingLeft: 50 }
            : { color: "limeGreen" }
        }
      >
        {isLoggedIn ? "LOGOUT" : "LOGIN"}
      </User>
    </div>
  );
}

export default NavBarLeft;
