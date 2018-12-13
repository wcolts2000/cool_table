import React, { Component } from "react";
import axios from "axios";
import { URL } from "../App";
import styled from "styled-components";

// ==============================
// =====  Styled Component  =====
// ==============================

const Card = styled.div`
  padding: 20px;
  color: #0f0f0f;
  background: #eadbb4;
  overflow: hidden;
  transform: rotate(-0.5deg);
  box-shadow: -1px 3px 10px rgba(0, 0, 0, 0.3);
  background-image: repeating-linear-gradient(
    to bottom,
    #eadbb4 0,
    #eadbb4 20px,
    lightblue 20px,
    lightblue 22px,
    #eadbb4 22px
  );
  line-height: 1.6;
`;

// ==============================
// =====      Component     =====
// ==============================

class Quiz extends Component {
  state = {
    quiz: [],
    questions: []
  };

  componentDidMount = () => {
    let id = this.props.match.params.id;

    axios
      .get(`${URL}quizzes/${id}`)
      .then(({ data }) => this.setState({ quiz: data }))
      .catch(err => console.log(err));
    axios
      .get(`${URL}quizzes/${id}/questions/1`)
      .then(({ data }) => this.setState({ questions: data }))
      .catch(err => console.log(err));
  };

  render() {
    let { title, votes, author, topic } = this.state.quiz;

    if (!this.state.quiz) return <h4>Loading...</h4>;
    return (
      <div style={{ padding: 30 }}>
        <Card>
          <h1>Quiz on {topic}</h1>
          <h2>{title}</h2>
          <p>Submitted by: {author ? author["username"] : null}</p>
          <p>votes: {votes}</p>
        </Card>
        <Card>
          <h3>{}</h3>
        </Card>
      </div>
    );
  }
}

export default Quiz;
