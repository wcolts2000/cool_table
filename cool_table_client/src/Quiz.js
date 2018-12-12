import React, { Component } from "react";
import axios from "axios";
import { URL } from "./App";

class Quiz extends Component {
  state = {
    quiz: [],
    questions: []
  };

  componentDidMount = () => {
    console.log("", this.props);
    let id = this.props.match.params.id;

    axios
      .get(`${URL}quizzes/${id}`)
      .then(({ data }) => this.setState({ quiz: data }))
      .catch(err => console.log(err));
    axios
      .get(`${URL}quizzes/${id}/questions/`)
      .then(({ data }) => this.setState({ questions: data }))
      .catch(err => console.log(err));
  };

  render() {
    // let quiz = this.state.quiz;
    const {
      title,
      votes,
      // author: { username },
      topic
    } = this.state.quiz;
    // console.log(quiz.author);
    if (!this.state.quiz) return <h4>Loading...</h4>;
    return (
      <>
        <h1>Quiz on {topic}</h1>
        <h2>{title}</h2>
        {/* <p>Submitted by: {username}</p> */}
        <p>votes: {votes}</p>
      </>
    );
  }
}

export default Quiz;
