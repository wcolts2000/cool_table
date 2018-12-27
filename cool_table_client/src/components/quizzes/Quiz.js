import React, { Component } from "react";
import styled from "styled-components";
import {
  getSingleQuiz,
  getQuestionResponse,
  resetQuiz
} from "../../store/actions";
import { connect } from "react-redux";
import BackBtnAttribute from "../specializedComponents/backButton/BackBtnAttribute";
import BackButton from "../specializedComponents/backButton/BackButton";
import QuizCompleteModal from "./QuizCompleteModal";
import QuizHeader from "./QuizHeader";

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
  max-width: 800px;
  width: 80%;
  margin: 0 auto 175px;
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
    opacity: 0.1;
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
  color: ${props => (props.selected === "selected" ? "darkgreen" : "inherit")};
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
  opacity: ${props => (props.selected === "selected" ? 1 : 0)};
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
      this.setState(prevState => ({
        selected: null,
        attempts: prevState.attempts + 1
      }));
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
        <div style={{ overflow: "hidden", maxHeight: "90vh", height: "100%" }}>
          {this.props.quizFinished && (
            <QuizCompleteModal
              attempts={this.state.attempts}
              correct={this.props.correct}
              resetQuiz={this.props.resetQuiz}
              history={this.props.history}
              resetQuestions={this.resetQuestions}
            />
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
            <QuizHeader 
              title={title}
              topic={topic}
              author={author}
              votes={votes}
              questions={questions}
              attempts={this.state.attempts}
              correct={this.props.correct}
            />
            <h5 style={{ opacity: 0.7 }}>
              Answer the question below to proceed.
            </h5>
            {questions.map((question, i) => (
              <Card key={i} id={question.id}>
                <h3>{question.question}</h3>
                <div style={{ textAlign: "left" }}>
                  {question.options.map((option, i) => (
                    <Div
                      key={i}
                      selected={
                        this.state.selected === i + 1 ? "selected" : null
                      }
                    >
                      <Radio
                        type="radio"
                        id={option + i}
                        name={question.question}
                        onClick={() => this.pickAnswer(i + 1)}
                        value={option}
                        selected={
                          this.state.selected === i + 1 ? "selected" : null
                        }
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
        </div>
      );
    }
    if (this.props.singleQuiz.length && !this.props.questions.length) {
      let { title, votes, author, topic } = this.props.singleQuiz[0];
      return (
        <div
          style={{
            padding: "0 20px 20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "calc(100vh - 110px)"
          }}
        >
          <BackButton props={this.props} />
          <QuizHeader title={title} topic={topic} author={author} votes={votes} />
          <h2 style={{ paddingTop: 50 }}>
            "Sorry...This quiz has not had any questions associated with it yet
            : ( "
          </h2>
          <BackBtnAttribute />
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = ({
  quizzesReducer: { singleQuiz, quizFinished, correct, questions }
}) => ({
  singleQuiz,
  quizFinished,
  correct,
  questions
});

export default connect(
  mapStateToProps,
  { getSingleQuiz, getQuestionResponse, resetQuiz }
)(Quiz);
