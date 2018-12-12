import React, { Component } from "react";

export default class UserLogin extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form style={{ padding: 40 }}>
        <input
          type="text"
          name="username"
          value={this.state.username}
          placeholder="Username..."
          autoComplete="username"
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          placeholder="Password..."
          autoComplete="current-password"
          onChange={this.handleChange}
        />
        <button>LOGIN</button>
      </form>
    );
  }
}
