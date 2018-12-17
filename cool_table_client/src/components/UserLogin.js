import React, { Component } from "react";
import { logIn } from "../store/actions";
import { connect } from "react-redux";

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
        autoComplete="off"
        placeholder={placeholder}
        required
        onChange={this.handleChange}
      />
    );
    return (
      <form style={{ padding: 40 }} onSubmit={this.handleSubmit}>
        {Input("email", "email", "email...")}
        {Input("password", "password", "password")}
        <button>LOGIN</button>
      </form>
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
