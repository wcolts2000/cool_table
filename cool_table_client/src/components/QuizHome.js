import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { URL } from "../store/actions";

// ==============================
// =====  Styled Component  =====
// ==============================

const QuizCard = styled.div`
  padding: 10px;
  width: 80%;
  max-width: 800px;
  margin: 30px auto;
  border-radius: 7px;
  box-shadow: -1px 2px 7px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
  display: inline-block;
  color: aqua;
  background: #0f0f0f;
  border: 2px solid aqua;
  text-align: left;

  & > ul > li {
    border-bottom: 2px dotted papayawhip;
    margin-bottom: 5px;
    margin-right: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > p {
      display: inline-block;
    }
    & > span {
      font-size: 10px;
      margin-right: 20px;
      color: papayawhip;
      text-transform: uppercase;
      font-weight: bold;
    }
  }
`;

// ==============================
// =====      Component     =====
// ==============================

export default class QuizHome extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: []
    };
  }

  componentDidMount = () => {
    axios
      .get(`${URL}quizzes/`)
      .then(({ data }) => {
        this.setState({ quizzes: data });
      })
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.quizzes.length) {
      return (
        <>
          <h1> __QUIZZES__</h1>
          {this.props.isLoggedIn ? (
            <button
              onClick={() => this.props.history.push("/quiz/form")}
              style={{ display: "block", margin: "0 auto" }}
            >
              Add A Quiz
            </button>
          ) : null}
          <QuizCard>
            <ul>
              {this.state.quizzes.map((quiz, i) => {
                return (
                  <li
                    key={i}
                    id={quiz.id}
                    onClick={() =>
                      this.props.history.push(`/quiz/single-quiz/${quiz.id}`)
                    }
                  >
                    <p>
                      {quiz.title}: {quiz.topic}&nbsp;&nbsp;&nbsp;
                    </p>
                    <span>
                      votes:&nbsp;{quiz.votes} {"    "}Author:&nbsp;
                      {quiz.author}
                    </span>
                  </li>
                );
              })}
            </ul>
          </QuizCard>
        </>
      );
    }
    return null;
  }
}
