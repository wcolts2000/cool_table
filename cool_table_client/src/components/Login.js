import React, { Component } from "react";
import { logIn } from "../store/actions";
import { connect } from "react-redux";
import PasswordInput from "./PasswordInput";
import EyeIconAttribute from "./EyeIconAttribute";
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

const mapStateToProps = ({ isLoggedIn, user, token }) => ({
  isLoggedIn,
  user,
  token
});

export default connect(
  mapStateToProps,
  { logIn }
)(UserLogin);

// const Input = (name, type = 'text') => (
//   <input
// 	type={type}
// 	name={name}
// 	id={name}
// 	autoComplete="off"
// 	required
//   />
// );

// // or a local method for controlled inputs:
// makeInput = (name, type = 'text') => (
//     <>
//       <label htmlFor={name}>{name}</label>
//       <input
// 		value={this.state[name]}
// 		type={type}
// 		name={name}
// 		id={name}
// 		autoComplete="off"
// 		required
// 	  />
//     </>
// );

//token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlhdCI6MTU0NDcyNjY0OSwiZXhwIjoxNTc2Mjg0MjQ5fQ.GOA5uOFUaJ9Z1AXnGHZQZJfLsR_vS7DwySGj8nGGuZc","user":{"id":12,"username":"sean","img_url":"https://img.devrant.com/devrant/rant/r_1621414_CgMfU.jpg"}}
