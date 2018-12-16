import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { URL } from "./store/actions";

// ==============================
// =====  Styled Component  =====
// ==============================

const Form = styled.form`
  padding: 30px;
`;

const Textarea = styled.textarea`
  height: 30vh;
  resize: none;
  background: #deb887;
  border: none;
  outline: none;
  border-bottom: 2px solid aqua;
  font-size: 16px;
  padding: 15px 20px;
  text-align: left;
  display: block;
  border-radius: 10px;
  margin: 0 auto;
  color: #0f0f0f;
  margin-bottom: 20px;
  width: 80%;
  max-width: 400px;

  &::placeholder {
    color: white;
    text-shadow: -1px 2px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    border: none;
    outline: none;
    border-bottom: 2px solid green;
  }
`;

// ==============================
// =====      Component     =====
// ==============================

export default class ForumPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      votes: 0,
      time_limit_seconds: 0,
      topic: "",
      question: "",
      answers: []
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
          name="title"
        />
        <Textarea
          value={this.state.body}
          onChange={this.handleInputChange}
          placeholder="Your thoughts..."
          name="body"
        />
        <button>Drop&nbsp;some&nbsp;knowledge</button>
      </Form>
    );
  }
}
