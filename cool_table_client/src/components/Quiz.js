import React, { Component } from "react";
import styled from "styled-components";
import {
  getSingleQuiz,
  getQuestionResponse,
  resetQuiz
} from "../store/actions";
import { connect } from "react-redux";
import BackBtnAttribute from "./BackBtnAttribute";
import BackButton from "./BackButton";

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

const CardHeader = styled.div`
  margin: 0 auto 50px;
  background: burlywood;
  color: #0f0f0f;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 20px;

  & > h1 {
    font-size: 20px;
    display: block;
    width: 100%;
  }

  & > p {
    font-size: 16px;
    margin: 0;
    padding: 0 0 10px;
    margin-right: 15px;
  }
`;

const Card = styled.div`
  padding: 20px;
  color: #0f0f0f;
  background: #eadbb4;
  overflow: hidden;
  transform: rotate(-0.5deg);
  box-shadow: -1px 3px 10px rgba(0, 0, 0, 0.3);
  max-width: 800px;
  width: 80%;
  margin: 0 auto 20px;
  background-image: repeating-linear-gradient(
    to bottom,
    #eadbb4 0,
    #eadbb4 20px,
    lightblue 20px,
    lightblue 22px,
    #eadbb4 22px
  );
  line-height: 1.6;
  &:not(:nth-of-type(1)) {
    opacity: 0.7;
  }
  &:not(:nth-of-type(2)) {
    pointer-events: none;
  }

  &:nth-of-type(2) {
    opacity: 1;
  }
`;

const Div = styled.div`
  width: 100%;
  display: inline-block;
  cursor: pointer;
  color: ${props => (props.selected ? "darkgreen" : "inheret")};
  position: relative;
  margin: 0 0 15px 35px;
  &:hover {
    color: darkgreen;
  }
`;

const Radio = styled.input`
  position: absolute;
  width: initial;
  left: -31px;
  top: 6px;
`;

const Span = styled.span`
  height: 16px;
  width: 16px;
  border: 5px solid #0f0f0f;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: -38px;
  top: -4px;
`;

const Label = styled.label`
  cursor: pointer;
  font-size: inherit;
  position: relative;
`;

// ==============================
// =====      Component     =====
// ==============================

class Quiz extends Component {
  state = {
    attempts: 0,
    selected: null
  };
  componentDidMount = () => {
    let id = this.props.match.params.id;

    this.props.getSingleQuiz(id);
  };

  pickAnswer = (selectedOption, id) => {
    this.setState({
      selected: selectedOption
    });
  };

  submitAnswer = id => {
    let quizId = this.props.match.params.id;
    if (this.state.selected) {
      this.props.getQuestionResponse(quizId, this.state.selected, id);
      this.setState({
        selected: null,
        attempts: this.state.attempts + 1
      });
    }
    return null;
  };

  resetQuestions = () => {
    this.props.getSingleQuiz(this.props.match.params.id);
    this.props.resetQuiz();
  };

  render() {
    if (!this.props.singleQuiz) return <h4>Loading...</h4>;
    if (this.props.questions.length && this.props.singleQuiz.length) {
      let { title, votes, author, topic } = this.props.singleQuiz[0];
      let questions = this.props.questions;
      return (
        <>
          {this.props.quizFinished && (
            <Modal>
              <div>
                <h3 style={{ color: "white" }}>
                  You had {this.state.attempts} attempts and got &nbsp;
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
              <button onClick={this.resetQuestions}>Retry Quiz</button>
            </Modal>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              minHeight: "calc(100vh - 70px)"
            }}
          >
            <BackButton props={this.props} />
            <CardHeader>
              <h1>Topic: {topic}</h1>
              <p> Title: {title}</p>
              <p>
                Submitted by:{" "}
                <span>
                  {author.img_url ? (
                    <img
                      src={author.img_url}
                      style={{ width: 20 }}
                      alt="user avatar"
                    />
                  ) : null}
                </span>
                &nbsp; {author["username"]}
                &nbsp;votes: {votes}
              </p>
              <p>
                Questions left: {questions.length} Attempts:{" "}
                {this.state.attempts} Correct: {this.props.correct}
              </p>
            </CardHeader>
            {questions.map((question, i) => (
              <Card key={i} id={question.id}>
                <h3>{question.question}</h3>
                <div style={{ textAlign: "left" }}>
                  {question.options.map((option, i) => (
                    <Div key={i}>
                      <Radio
                        type="radio"
                        id={option + i}
                        name={question.question}
                        onClick={() => this.pickAnswer(i + 1)}
                        value={option}
                      />
                      <Label htmlFor={option + i}>
                        <Span />
                        {option}
                      </Label>
                    </Div>
                  ))}
                  <button onClick={() => this.submitAnswer(question.id)}>
                    Submit
                  </button>
                </div>
              </Card>
            ))}
            <BackBtnAttribute />
          </div>
        </>
      );
    }
    return (
      <div
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "calc(100vh - 110px)"
        }}
      >
        <BackButton props={this.props} />
        <h1 style={{ paddingTop: 50 }}>
          "Sorry...This quiz has not had any questions associated with it yet :
          ( "
        </h1>
        <BackBtnAttribute />
      </div>
    );
  }
}

const mapStateToProps = ({ singleQuiz, questions, correct, quizFinished }) => ({
  singleQuiz,
  quizFinished,
  correct,
  questions
});

export default connect(
  mapStateToProps,
  { getSingleQuiz, getQuestionResponse, resetQuiz }
)(Quiz);
