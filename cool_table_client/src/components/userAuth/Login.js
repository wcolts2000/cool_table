import React, { Component } from "react";
import { logIn } from "../../store/actions";
import { connect } from "react-redux";
import PasswordInput from "../specializedComponents/PasswordInput";
import EyeIconAttribute from "../specializedComponents/EyeIconAttribute";
import styled from "styled-components";

const Div = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 70px);
`;

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
