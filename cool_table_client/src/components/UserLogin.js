import React, { Component } from "react";
import { URL } from "../store/actions";
import axios from "axios";

export default class UserLogin extends Component {
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
    let user = { email: this.state.email, password: this.state.password };
    e.preventDefault();
  };

  render() {
    const Input = (name, type = "text") => (
      <input
        type={type}
        name={name}
        id={name}
        autoComplete="off"
        required
        onChange={this.handleChange}
      />
    );
    return (
      <form style={{ padding: 40 }} onSubmit={this.handleSubmit}>
        {/* <input
          type="text"
          name="email"
          value={this.state.email}
          placeholder="email..."
          autoComplete="email"
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          placeholder="Password..."
          autoComplete="current-password"
          onChange={this.handleChange}
        /> */}
        <Input />
        <Input name="password" type="password" />
        <button>LOGIN</button>
      </form>
    );
  }
}

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
