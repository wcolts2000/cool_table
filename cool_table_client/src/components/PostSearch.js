import React from "react";

function PostSearch({ filterPosts }) {
  return (
    <div>
      <input
        type="search"
        aria-label="Search"
        placeholder="Filter Posts By Title  ..."
        onChange={filterPosts}
      />
    </div>
  );
}

export default PostSearch;
