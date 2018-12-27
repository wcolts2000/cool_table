import React, { Component } from "react";
import styled from "styled-components";
import { fetchQuizzes } from "../../store/actions";
import { connect } from "react-redux";
import QuizCard from "./QuizCard";

// ==============================
// =====  Styled Component  =====
// ==============================

const QuizCardWrapper = styled.div`
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
`;

// ==============================
// =====      Component     =====
// ==============================

class QuizHome extends Component {
  componentDidMount = () => {
    this.props.fetchQuizzes();
  };

  render() {
    let { quizzes, isLoggedIn, history } = this.props;
    return (
      quizzes && (
        <>
          <h1> __QUIZZES__</h1>
          {isLoggedIn ? (
            <button
              onClick={() => this.props.history.push("/quiz/form")}
              style={{ display: "block", margin: "0 auto" }}
            >
              Add A Quiz
            </button>
          ) : null}
          <QuizCardWrapper>
            <ul>
              {quizzes.map((quiz, i) => {
                return (
                  <QuizCard key={i} quiz={quiz} history={history} />
                  // <li
                  //   key={i}
                  //   id={quiz.id}
                  //   onClick={() =>
                  //     this.props.history.push(`/quiz/single-quiz/${quiz.id}`)
                  //   }
                  // >
                  //   <p>
                  //     {quiz.title}: {quiz.topic}&nbsp;&nbsp;&nbsp;
                  //   </p>
                  //   <span>
                  //     votes:&nbsp;{quiz.votes} {"    "}Author:&nbsp;
                  //     {quiz.author}
                  //   </span>
                  // </li>
                );
              })}
            </ul>
          </QuizCardWrapper>
        </>
      )
    );
  }
}

const mapStateToProps = ({
  quizzesReducer: { quizzes },
  userReducer: { isLoggedIn }
}) => ({
  quizzes,
  isLoggedIn
});

export default connect(
  mapStateToProps,
  { fetchQuizzes }
)(QuizHome);
