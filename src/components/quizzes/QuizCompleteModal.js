import React, { Component } from "react";
import styled from "styled-components";

// ==============================
// =====  Styled Component  =====
// ==============================

const Modal = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.9);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// ==============================
// =====      Component     =====
// ==============================

export default class QuizCompleteModal extends Component {
  render() {
    return (
      <Modal>
        <div>
          <h3 style={{ color: "white" }}>
            You had {this.props.attempts} attempts and got &nbsp;
            {this.props.correct} correct answers
          </h3>
        </div>
        <button
          style={{ marginRight: 10 }}
          onClick={() => {
            this.props.resetQuiz();
            this.props.history.push("/quiz");
          }}
        >
          Return to Quizzes
        </button>
        <button onClick={() => this.props.resetQuestions()}>Retry Quiz</button>
      </Modal>
    );
  }
}
