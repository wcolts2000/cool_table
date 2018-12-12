import React, { Component } from "react";
import styled from "styled-components";

// ==============================
// =====  Styled Component  =====
// ==============================

const H1 = styled.h1`
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 40px;

  & > span {
    font-size: 36px;
    line-height: 60px;
    font-weight: bolder;
    text-transform: uppercase;
    color: aqua;
    background: #0f0f0f;
    padding: 10px 25px;
    border-radius: 7px;

    & > span {
      font-weight: normal;
      opacity: 0.7;
    }
  }
`;

const Input = styled.input`
  color: transparent;
  background: aqua;
  border-bottom: 2px solid #0f0f0f;
  opacity: 0.6;

  &::after {
    content: "Upload Avatar Image";
    display: inline-block;
    color: #0f0f0f;
    padding-left: 10px;
  }
`;

// ==============================
// =====      Component     =====
// ==============================

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordCheck: "",
      avatar: ""
    };
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  resetForm = () => {
    this.setState({
      username: "",
      email: "",
      password: "",
      passwordCheck: "",
      avatar: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <H1>
          Get Your Seat At The <br />
          <span>
            Cool<span>Table</span>
          </span>
        </H1>
        <input
          type="text"
          name="username"
          required
          autoComplete="username"
          value={this.state.username}
          placeholder="Username..."
          onChange={this.handleInputChange}
        />
        <input
          type="email"
          name="email"
          required
          value={this.state.email}
          placeholder="Email..."
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          name="password"
          required
          value={this.state.password}
          placeholder="Password..."
          autoComplete="New Password"
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          name="passwordCheck"
          required
          value={this.state.passwordCheck}
          placeholder="Retype Password..."
          autoComplete="New Password"
          onChange={this.handleInputChange}
        />
        <Input type="file" name="avatar" />
        <button type="submit" style={{ marginRight: 15 }}>
          Submit
        </button>{" "}
        <button onClick={this.resetForm}>Reset</button>
      </form>
    );
  }
}
