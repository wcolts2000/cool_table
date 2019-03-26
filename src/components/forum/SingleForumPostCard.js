import React from "react";
import styled from "styled-components";

// ==============================
// =====  Styled Component  =====
// ==============================

const Card = styled.div`
  padding: 20px;
  color: #0f0f0f;
  background: #eadbb4;
  overflow: hidden;
  max-width: 800px;
  width: 90%;
  margin: 0 auto 25px;
  transform: rotate(-0.5deg);
  box-shadow: -1px 3px 10px rgba(0, 0, 0, 0.3);
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

// ==============================
// =====      Component     =====
// ==============================

let moment = require("moment");

function SingleForumPostCard({
  post: {
    title,
    author: { username, img_url },
    body,
    created_at
  }
}) {
  return (
    <Card>
      <h1>
        {title}{" "}
        <span style={{ fontSize: 16, opacity: 0.7 }}>
          posted by:{" "}
          {img_url !== null ? (
            <img
              src={`${img_url}`}
              alt="[ __ users avatar goes here __ ]"
              style={{ width: 20 }}
            />
          ) : null}
          &nbsp;
          {username}
        </span>
      </h1>
      <p>{body}</p>
      <p>{moment.utc(created_at).format("MMMM Do YYYY, hh:mm a")}</p>
    </Card>
  );
}

export default SingleForumPostCard;
