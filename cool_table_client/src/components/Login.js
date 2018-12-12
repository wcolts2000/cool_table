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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 50px;
  color: aqua;
  text-shadow: -1px 2px rgba(0, 0, 0, 0.3), -2px 3px rgba(0, 0, 0, 0.3),
    -3px 4px rgba(0, 0, 0, 0.3);
  & > p {
    margin-bottom: -40px;
    font-size: 30px;
    padding: 0;
  }

  & > h1 {
    font-size: 50px;

    & > span {
      font-weight: normal;
      opacity: 0.7;
    }
  }
`;

// ==============================
// =====      Component     =====
// ==============================

export default class Login extends Component {
  render() {
    return (
      <>
        <Header>
          <p>THE</p>
          <h1>
            COOL<span>TABLE</span>
          </h1>
        </Header>
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
