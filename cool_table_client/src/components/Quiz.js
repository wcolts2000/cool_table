import React, { Component } from "react";
import styled from "styled-components";
import { getSingleQuiz } from "../store/actions";
import { connect } from "react-redux";
import BackBtnAttribute from "./BackBtnAttribute";
import BackButton from "./BackButton";

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
  width: 90%;
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
  componentDidMount = () => {
    let id = this.props.match.params.id;

    this.props.getSingleQuiz(id);
  };

  pickAnswer = id => {
    console.log("picked: #", id);
  };

  render() {
    if (!this.props.singleQuiz) return <h4>Loading...</h4>;
    if (this.props.questions.length && this.props.singleQuiz.length) {
      let { title, votes, author, topic } = this.props.singleQuiz[0];
      let questions = this.props.questions;
      return (
        <div
          style={{
            padding: 30,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            minHeight: "calc(100vh - 70px)"
          }}
        >
          <BackButton props={this.props} />
          <Card>
            <h1>Quiz on {topic}</h1>
            <h2>{title}</h2>
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
              &nbsp;
              {author ? author["username"] : null}
            </p>
            <p>votes: {votes}</p>
          </Card>
          {questions.map((question, i) => (
            <Card key={i}>
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
              </div>
            </Card>
          ))}
          <BackBtnAttribute />
        </div>
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

const mapStateToProps = ({ singleQuiz, questions }) => ({
  singleQuiz,
  questions
});

export default connect(
  mapStateToProps,
  { getSingleQuiz }
)(Quiz);
