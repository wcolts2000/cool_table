import React from "react";
import styled from "styled-components";
import ForumListCard from "./ForumListCard";

// ==============================
// =====  Styled Component  =====
// ==============================

const PostCardContainer = styled.div`
  padding: 30px;
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(235px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
`;

// ==============================
// =====      Component     =====
// ==============================

function ForumList({ posts, history }) {
  if (posts) {
    return (
      <PostCardContainer>
        {posts.map(({ id, title, created_at, body, author }) => {
          return (
            <ForumListCard
              id={id}
              key={id}
              created_at={created_at}
              body={body}
              author={author}
              title={title}
              history={history}
            />
          );
        })}
      </PostCardContainer>
    );
  }
  return null;
}

export default ForumList;
