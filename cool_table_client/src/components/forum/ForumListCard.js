import React from "react";
import styled from "styled-components";

// ==============================
// =====  Styled Component  =====
// ==============================

const PostCard = styled.div`
  background-image: repeating-linear-gradient(
    to bottom,
    #eadbb4 0,
    #eadbb4 20px,
    lightblue 20px,
    lightblue 22px,
    #eadbb4 22px
  );
  padding: 10px 10px;
  border-radius: 7px;
  height: 240px;
  box-shadow: -1px 3px 7px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  & > p {
    line-height: 150%;
  }

  & > p:last-of-type {
    font-size: 12px;
    background: #deb887;
    border-radius: 3px;
    padding: 5px;
  }

  & > p > span {
    opacity: 0.8;
    font-size: 10px;
  }
`;

// ==============================
// =====      Component     =====
// ==============================

let moment = require("moment");

function ForumListCard({ id, title, body, author, created_at, history }) {
  return (
    <PostCard onClick={() => history.push(`/forum/single-post/${id}`)}>
      <h3>
        {title.slice(0, 20)}
        {title.length > 20 ? "..." : null}
      </h3>
      <p>
        {body.slice(0, 100)}
        {body.length > 100 ? "..." : null}
      </p>
      <p>
        {author}{" "}
        <span>{moment.utc(created_at).format("MMMM Do YYYY, hh:mm a")}</span>
      </p>
    </PostCard>
  );
}

export default ForumListCard;
