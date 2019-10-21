import React, { Component } from "react";
import { logIn } from "../../store/actions";
import { connect } from "react-redux";
import PasswordInput from "../specializedComponents/passwordInput/PasswordInput";
import EyeIconAttribute from "../specializedComponents/passwordInput/EyeIconAttribute";
import styled from "styled-components";
import door from "../../img/garden-door.jpg";

// ==============================
// =====      Component     =====
// ==============================

class UserLogin extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.logIn({
      email: this.state.email,
      password: this.state.password
    });
    this.props.history.push("/home");
  };

  render() {
    const Input = (name, type = "text", placeholder) => (
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
      <Div>
        <form style={{ padding: 40 }} onSubmit={this.handleSubmit}>
          {Input("email", "email", "email...")}
          <PasswordInput
            password={this.state.password}
            change={this.handleChange}
            inputValue={this.state.password}
            placeholder="Password..."
            name="password"
          />
          <button>LOGIN</button>
        </form>
        <EyeIconAttribute />
      </Div>
    );
  }
}

const mapStateToProps = ({ userReducer: { isLoggedIn, user, token } }) => ({
  isLoggedIn,
  user,
  token
});

export default connect(
  mapStateToProps,
  { logIn }
)(UserLogin);

// ==============================
// =====  Styled Component  =====
// ==============================

const Div = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.6)
    ),
    url(${door});
  background-position: center;
  background-size: cover;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 100px);
  padding-bottom: 30px;
`;
