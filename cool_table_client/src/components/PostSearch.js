import React from "react";

function PostSearch({ searchField, searchChange }) {
  return (
    <div>
      <input
        type="search"
        aria-label="Search"
        placeholder="Filter Posts By Title  ..."
        onChange={searchChange}
      />
    </div>
  );
}

export default PostSearch;
