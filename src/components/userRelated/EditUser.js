import React, { Component } from "react";
import styled from "styled-components";
import { registerUser } from "../../store/actions";
import { connect } from "react-redux";
import PasswordInput from "../specializedComponents/passwordInput/PasswordInput";
import EyeIconAttribute from "../specializedComponents/passwordInput/EyeIconAttribute";
import EditUserCard from "./EditUserCard";

// ==============================
// =====  Styled Component  =====
// ==============================

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

const H1 = styled.h1`
  font-size: 14px;
  text-transform: uppercase;
  opacity: 0.7;
`;

// ==============================
// =====      Component     =====
// ==============================

class EditUser extends Component {
  constructor() {
    super();
    this.state = {
      newUsername: "",
      currentPassword: "",
      newPassword: ""
    };
  }

  componentDidMount = () => {
    if (this.props.user.length)
      return this.setState({
        newUsername: this.props.user.username
      });
    return null;
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  resetForm = e => {
    e.preventDefault();
    this.setState({
      newUsername: "",
      currentPassword: "",
      newPassword: ""
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
      this.state.currentPassword === this.state.passwordCheck &&
      this.state.username.length
    ) {
      this.props.registerUser(user);
      this.props.history.push("/home");
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <EditUserCard
            user={this.props.user}
            stateUser={this.state.newUsername}
          />
          <H1>Update your username or password</H1>
          <Label>(optional)</Label>
          <input
            placeholder="New Username..."
            value={this.state.newUsername}
            autoComplete="off"
            onChange={this.handleChange}
            name="newUsername"
            type="text  "
          />
          <Label>(required)</Label>
          <PasswordInput
            autoComplete="off"
            password={this.state.currentPassword}
            change={this.handleChange}
            inputValue={this.state.currentPassword}
            placeholder="Current Password..."
            name="currentPassword"
          />
          <Label>(optional)</Label>
          <PasswordInput
            password={this.state.newPassword}
            change={this.handleChange}
            inputValue={this.state.newPassword}
            placeholder="New Password..."
            name="newPassword"
          />
          <button type="submit" style={{ marginRight: 15 }}>
            Submit
          </button>{" "}
          <button onClick={this.resetForm}>Reset</button>
        </form>
        <EyeIconAttribute />
      </>
    );
  }
}

const mapStateToProps = ({ userReducer: { user } }) => ({
  user
});

export default connect(
  mapStateToProps,
  { registerUser }
)(EditUser);
