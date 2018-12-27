import React from "react";
import styled from "styled-components";
import QuizQuestionOptions from "./QuizQuestionOptions";

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

// ==============================
// =====      Component     =====
// ==============================

function QuizCard({ question, selected, pickAnswer, submitAnswer }) {
  return (
    <Card id={question.id}>
      <h3>{question.question}</h3>
      <div style={{ textAlign: "left" }}>
        {question.options.map((option, i) => (
          <QuizQuestionOptions
            key={i}
            selected={selected}
            option={option}
            question={question}
            pickAnswer={pickAnswer}
            i={i}
          />
        ))}
        <button onClick={() => submitAnswer(question.id)}>Submit</button>
      </div>
    </Card>
  );
}

export default QuizCard;
