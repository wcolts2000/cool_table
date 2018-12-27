import React from "react";
import styled from "styled-components";

// ==============================
// =====  Styled Component  =====
// ==============================

const CardHeader = styled.div`
  margin: 0 auto 10px;
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

// ==============================
// =====      Component     =====
// ==============================

function QuizHeader({
  title,
  topic,
  author,
  votes,
  questions,
  attempts,
  correct
}) {
  return (
    <CardHeader>
      <h1> Title: {title}</h1>
      <p>Topic: {topic}</p>
      <p>
        Submitted by:{" "}
        <span>
          {author.img_url ? (
            <img src={author.img_url} style={{ width: 20 }} alt="user avatar" />
          ) : null}
        </span>
        &nbsp; {author["username"]}
        &nbsp;votes: {votes}
      </p>
      { questions && <p>
        Questions left: {questions.length} Attempts: {attempts} Correct:{" "}
        {correct}
      </p> 
      }
    </CardHeader>
  );
}

export default QuizHeader;
