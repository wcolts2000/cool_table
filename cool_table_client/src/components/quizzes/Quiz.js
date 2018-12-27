import React, { Component } from "react";
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
import QuizCard from "./QuizCard";

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
              <QuizCard
                key={i}
                id={question.id}
                question={question}
                selected={this.state.selected}
                pickAnswer={this.pickAnswer}
                submitAnswer={this.submitAnswer}
              />
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
          <QuizHeader
            title={title}
            topic={topic}
            author={author}
            votes={votes}
          />
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
