import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { URL } from "../store/actions";

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
  background: aqua;
  border-bottom: 2px solid #0f0f0f;
  opacity: 0.6;
  color: #0f0f0f;
  &::placeholder {
    color: #0f0f0f;
  }
`;

const Label = styled.label`
  opacity: 0.4;
  padding-right: 330px;

  &:nth-of-type(4) {
    padding-right: 240px;
  }

  &:nth-of-type(5) {
    padding-right: 155px;
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
      avatar: "",
      err: "",
      token: "",
      user: ""
    };
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  resetForm = e => {
    e.preventDefault();
    this.setState({
      username: "",
      email: "",
      password: "",
      passwordCheck: "",
      avatar: ""
    });
  };

  handleSubmit = e => {
    let userInfo = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
      // img_url: this.state.avatar
    };
    e.preventDefault();
    if (this.state.password === this.state.passwordCheck) {
      axios
        .post(`${URL}auth/register`, userInfo)
        .then(({ token, user }) => this.setState({ token: token, user: user }))
        .catch(({ error }) => console.log(error));
    }
    if (this.state.user.length) {
      this.props.logIn({ token: this.state.token, user: this.state.user });
    }
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
        <Label>(required)</Label>
        <input
          type="text"
          name="username"
          required
          autoComplete="username"
          value={this.state.username}
          placeholder="Username..."
          onChange={this.handleInputChange}
        />
        <Label>(required)</Label>
        <input
          type="email"
          name="email"
          required
          value={this.state.email}
          placeholder="Email..."
          onChange={this.handleInputChange}
        />
        <Label>(required)</Label>
        <input
          type="password"
          name="password"
          required
          value={this.state.password}
          placeholder="Password..."
          autoComplete="New Password"
          onChange={this.handleInputChange}
        />
        <Label>(required...must match)</Label>
        <input
          type="password"
          name="passwordCheck"
          required
          value={this.state.passwordCheck}
          placeholder="Retype Password..."
          autoComplete="New Password"
          onChange={this.handleInputChange}
        />
        <Label>Enter Avatar URL here...(optional)</Label>
        <Input
          type="url"
          placeholder="Avatar URL..."
          name="avatar"
          onChange={this.handleInputChange}
        />
        <button type="submit" style={{ marginRight: 15 }}>
          Submit
        </button>{" "}
        <button onClick={this.resetForm}>Reset</button>
      </form>
    );
  }
}

// res: {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlhdCI6MTU0NDcyMzg2OCwiZXhwIjoxNTc2MjgxNDY4fQ.lGPClAhbaEaK0-c2wjXRCFpx3h3_5D7yA0ZGApAIGAs","user":{"id":12,"username":"sean"}}
//"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImlhdCI6MTU0NDcyNjAwNCwiZXhwIjoxNTc2MjgzNjA0fQ.qf--SAbTVYiW90eu-qu-jW4CSZ2o-Z8Pgkjbi5_vIko","user":{"id":16,"username":"osadfi"}}
