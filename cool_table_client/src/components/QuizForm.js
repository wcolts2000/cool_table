import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { URL } from "../App";

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

const PickTopic = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: #0f0f0f;
  color: white;
  border-radius: 7px;
  margin-bottom: 20px;

  text-transform: uppercase;
`;

const TopicsBox = styled.div`
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Topic = styled.div`
  font-size: 10px;
  color: #0f0f0f;
  text-transform: uppercase;
  border-radius: 7px;
  background: aqua;
  display: inline-block;
  padding: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    opacity: 0.7;
  }
`;

// ==============================
// =====      Component     =====
// ==============================

export default class QuizForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      topics: [],
      topic_id: null
    };
  }

  componentDidMount = () => {
    axios
      .get(`${URL}quizzes/topics/`)
      .then(({ data }) => this.setState({ topics: data }))
      .catch(err => console.log(err));
  };

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

  selectTopic = ({ id }) => {
    this.setState({
      topic_id: id
    });
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
        <Textarea
          value={this.state.body}
          onChange={this.handleInputChange}
          placeholder="Your thoughts..."
          name="body"
        />
        <PickTopic>
          <h3>pick your quiz topic</h3>
          <TopicsBox>
            {this.state.topics
              ? this.state.topics.map(({ id, name }) => (
                  <Topic
                    id={id}
                    key={id}
                    onClick={() => this.selectTopic({ id })}
                    style={
                      this.state.topic_id === id
                        ? { background: "yellow" }
                        : null
                    }
                  >
                    {name}
                  </Topic>
                ))
              : null}
          </TopicsBox>
        </PickTopic>
        <button>Test&nbsp;Peeps&nbsp;knowledge</button>
      </Form>
    );
  }
}
