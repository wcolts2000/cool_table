import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import table from "../img/background-beverage-breakfast-414645.jpg";

// ==============================
// =====  Styled Component  =====
// ==============================

const Header = styled.header`
  width: 100%;
  height: 40vh;
  margin-bottom: 65px;
  background: rgba(0, 0, 0, 0.7);
  background-image: url(${table});
  background-position: top right;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: -1px 3px 7px rgba(0, 0, 0, 0.3);
`;

// ==============================
// =====      Component     =====
// ==============================

export default class Login extends Component {
  render() {
    return (
      <>
        <Header />
        <Link to="/login">
          <button>LOGIN</button>
        </Link>
        <Link to="/home">
          <button>GUEST</button>
        </Link>
        <Link to="/register">
          <button>REGISTER</button>
        </Link>
      </>
    );
  }
}
