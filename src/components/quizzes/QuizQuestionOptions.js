import React from "react";
import styled from "styled-components";

// ==============================
// =====      Component     =====
// ==============================

function QuizQuestionOptions({ selected, i, option, question, pickAnswer }) {
  return (
    <Div selected={selected === i + 1 ? "selected" : null}>
      <Radio
        type="radio"
        id={option + i}
        name={question.question}
        onClick={() => pickAnswer(i + 1)}
        value={option}
        selected={selected === i + 1 ? "selected" : null}
      />
      <Label htmlFor={option + i}>
        <Span />
        {option}
      </Label>
    </Div>
  );
}

export default QuizQuestionOptions;

// ==============================
// =====  Styled Component  =====
// ==============================

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
