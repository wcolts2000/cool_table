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
          <EditUserCard user={this.props.user} />
          <Label>(optional)</Label>
          {Input("newUsername", "New Username")}
          <Label>(required)</Label>
          <PasswordInput
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
