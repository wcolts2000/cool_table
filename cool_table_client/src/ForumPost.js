import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { URL } from "./App";

// ==============================
// =====  Styled Component  =====
// ==============================

const Form = styled.form``;

// ==============================
// =====      Component     =====
// ==============================

export default class ForumPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  addPost = () => {
    const userId = 1;
    axios
      .post(
        `${URL}posts`,
        `{this.state, id: ${userId}, created_at: ${Date.now()}}`
      )
      .then(({ data }) => console.log(data))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Form onSubmit={this.addPost}>
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleInputChange}
          placeholder="Title..."
        />
        <input
          type="text"
          value={this.state.body}
          onChange={this.handleInputChange}
          placeholder="Your thoughts..."
        />
        <button>Drop&nbsp;some&nbsp;knowledge</button>
      </Form>
    );
  }
}
