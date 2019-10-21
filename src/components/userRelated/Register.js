import React, { Component } from "react";
import styled from "styled-components";
import { registerUser } from "../../store/actions";
import { connect } from "react-redux";
import PasswordInput from "../specializedComponents/passwordInput/PasswordInput";
import EyeIconAttribute from "../specializedComponents/passwordInput/EyeIconAttribute";
import AvatarList from "./AvatarList";
import UserAvatarAttribute from "./UserAvatarAttribute";

// ==============================
// =====      Component     =====
// ==============================

class Register extends Component {
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
      this.props.history.push("/login");
    }
  };

  avatarSelect = e => {
    this.setState({
      avatar: e.target.src
    });
  };

  render() {
    const Input = (name, placeholder, type = "text") => (
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        autoComplete="off"
        required
        onChange={this.handleChange}
      />
    );
    return (
      <>
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
          <Label>Avatar URL or Select Default Below</Label>
          <input
            type="url"
            name="avatar"
            id="avatar"
            placeholder="Avatar Url"
            autoComplete="off"
            required
            onChange={this.handleChange}
            value={this.state.avatar}
          />
          <AvatarList avatarSelect={this.avatarSelect} />
          <button type="submit" style={{ marginRight: 15 }}>
            Submit
          </button>{" "}
          <button onClick={this.resetForm}>Reset</button>
        </form>
        <UserAvatarAttribute />
        <EyeIconAttribute />
      </>
    );
  }
}

export default connect(
  null,
  { registerUser }
)(Register);

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
