import React, { Component } from "react";
import styled from "styled-components";

// ==============================
// =====      Component     =====
// ==============================
class QuizzesCard extends Component {
  render() {
    let {
      quiz: { id, title, topic, votes, author, question_count },
      history
    } = this.props;
    return (
      <Li id={id} onClick={() => history.push(`/quiz/single-quiz/${id}`)}>
        <p>
          {title}: {topic}&nbsp;&nbsp;&nbsp;
        </p>
        <span>
          votes:&nbsp;{votes} {"    "}Author:&nbsp;
          {author}
          <span className="qs">
            &nbsp;Questions:&nbsp;{question_count}
          </span>
        </span>
      </Li>
    );
  }
}

export default QuizzesCard;

// ==============================
// =====  Styled Component  =====
// ==============================

const Li = styled.li`
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

    .qs {
      color: tomato;
    }
  }
`;
