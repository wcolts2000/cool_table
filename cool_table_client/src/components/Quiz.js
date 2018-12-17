import React, { Component } from "react";
import styled from "styled-components";
import { getSingleQuiz } from "../store/actions";
import { connect } from "react-redux";

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
  margin-bottom: 20px;
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

const Li = styled.li`
  cursor: pointer;
  &:hover {
    color: darkgreen;
  }
`;

// ==============================
// =====      Component     =====
// ==============================

class Quiz extends Component {
  componentDidMount = () => {
    let id = this.props.match.params.id;

    this.props.getSingleQuiz(id);
    // axios
    //   .get(`${URL}quizzes/${id}`)
    //   .then(({ data }) => this.setState({ quiz: data }))
    //   .then(
    //     axios
    //       .get(`${URL}quizzes/${id}/questions/`)
    //       .then(({ data }) => this.setState({ questions: data }))
    //       .catch(err => console.log(err))
    //   )
    //   .catch(err => console.log(err));
  };

  pickAnswer = id => {
    console.log("picked: #", id);
  };

  render() {
    let { title, votes, author, topic } = this.props.singleQuiz;

    if (!this.props.singleQuiz) return <h4>Loading...</h4>;
    if (this.props.questions.length) {
      let questions = this.props.questions;
      return (
        <div style={{ padding: 30 }}>
          <Card>
            <h1>Quiz on {topic}</h1>
            <h2>{title}</h2>
            <p>Submitted by: {author ? author["username"] : null}</p>
            <p>votes: {votes}</p>
          </Card>
          {questions.map((question, i) => (
            <Card key={i}>
              <h3>{question.question}</h3>
              <ol style={{ textAlign: "left" }}>
                {question.options.map((option, i) => (
                  <Li key={i} onClick={() => this.pickAnswer()}>
                    {option}
                  </Li>
                ))}
              </ol>
            </Card>
          ))}
        </div>
      );
    }
    return (
      <h1>
        "Sorry...This quiz has not had any questions associated with it yet : (
        "
      </h1>
    );
  }
}

const mapStateToProps = ({ singleQuiz, questions }) => ({
  singleQuiz,
  questions
});

export default connect(
  mapStateToProps,
  { getSingleQuiz }
)(Quiz);
