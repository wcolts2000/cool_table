import React from "react";

function SingleForumPostButtons({ activateDelete, history }) {
  return (
    <div>
      <button
        style={{ marginRight: 15 }}
        onClick={() => history.push("/forum/post")}
      >
        EDIT
      </button>{" "}
      <button onClick={activateDelete}>DELETE</button>
    </div>
  );
}

export default SingleForumPostButtons;
