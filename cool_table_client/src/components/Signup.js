import React, { Component } from "react";
import styled from "styled-components";

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

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
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
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          name="passwordCheck"
          required
          value={this.state.passwordCheck}
          placeholder="Retype Password..."
          onChange={this.handleInputChange}
        />
        <input
          type="url"
          name="avatar"
          value={this.state.avatar}
          placeholder="Upload Avatar Image..."
          onChange={this.handleInputChange}
        />
        <button type="submit">Submit</button>{" "}
        <button onClick={this.resetForm}>Reset</button>
      </form>
    );
  }
}
