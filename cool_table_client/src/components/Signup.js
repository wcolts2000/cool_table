import React, { Component } from "react";
import styled from "styled-components";
import { registerUser } from "../store/actions";
import { connect } from "react-redux";
import PasswordInput from "./PasswordInput";

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

// const Input = styled.input`
//   background: aqua;
//   border-bottom: 2px solid #0f0f0f;
//   opacity: 0.6;
//   color: #0f0f0f;
//   &::placeholder {
//     color: #0f0f0f;
//   }
// `;

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

class Signup extends Component {
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

  handleChange = ({ target: { name, value } }) => {
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
    let user;
    this.state.avatar.length
      ? (user = {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
          img_url: this.state.avatar
        })
      : (user = {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password
        });
    e.preventDefault();
    if (
      this.state.password === this.state.passwordCheck &&
      this.state.username.length
    ) {
      this.props.registerUser(user);
      this.props.history.push("/home");
    }
  };

  render() {
    const Input = (name, placeholder, type = "text") => (
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required
        onChange={this.handleChange}
      />
    );
    return (
      <form onSubmit={this.handleSubmit}>
        <H1>
          Get Your Seat At The <br />
          <span>
            Cool<span>Table</span>
          </span>
        </H1>
        <Label>(required)</Label>
        {Input("username", "Username")}
        <Label>(required)</Label>
        {Input("email", "Email", "email")}
        <Label>(required)</Label>
        <PasswordInput
          password={this.state.password}
          change={this.handleChange}
          inputValue={this.state.password}
          placeholder="Password..."
          name="password"
        />
        <Label>(required...must match)</Label>
        <PasswordInput
          password={this.state.passwordCheck}
          change={this.handleChange}
          inputValue={this.state.passwordCheck}
          placeholder="Re-Enter Password..."
          name="passwordCheck"
        />
        <Label>Enter Avatar URL here...(optional)</Label>
        {Input("avatar", "Avatar URL...", "url")}
        <button type="submit" style={{ marginRight: 15 }}>
          Submit
        </button>{" "}
        <button onClick={this.resetForm}>Reset</button>
      </form>
    );
  }
}

export default connect(
  null,
  { registerUser }
)(Signup);

// {username: "sampleuser", email: "email@email.com", password: "password",…}
// email: "email@email.com"
// img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdu_tIfOlHoq3_A60curgxLzwIkcOWyK8uLa4R0rBwbDNfvkyFzQ"
// password: "password"
// username: "sampleuser"
