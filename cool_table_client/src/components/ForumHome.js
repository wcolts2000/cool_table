import React, { Component } from "react";
import axios from "axios";
import { URL } from "../store/actions";
import styled from "styled-components";

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

  & > p > span {
    opacity: 0.8;
    font-size: 10px;
  }
`;

// ==============================
// =====      Component     =====
// ==============================

let moment = require("moment");
export default class ForumHome extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      search: ""
    };
  }

  componentDidMount = () => {
    axios
      .get(`${URL}posts/`)
      .then(({ data }) => this.setState({ posts: data }))
      .catch(err => console.log(err));
  };

  handleSearchChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div style={{ paddingTop: 50 }}>
        <input
          type="text"
          name="search"
          value={this.state.search}
          placeholder="Filter Posts Here..."
          onChange={this.handleSearchChange}
        />
        {this.props.isLoggedIn ? (
          <button onClick={() => this.props.history.push("/forum/post")}>
            Add A Post
          </button>
        ) : null}
        <PostCardContainer>
          {this.state.posts.map(({ id, title, created_at, body, author }) => {
            return (
              <PostCard
                key={id}
                onClick={() =>
                  this.props.history.push(`/forum/single-post/${id}`)
                }
              >
                <h3>
                  {title.slice(0, 30)}
                  {title.length > 30 ? "..." : null}
                </h3>
                <p>
                  {body.slice(0, 150)}
                  {body.length > 150 ? "..." : null}
                </p>
                <p>
                  {author}{" "}
                  <span>
                    {moment.utc(created_at).format("MMMM Do YYYY, hh:mm a")}
                  </span>
                </p>
              </PostCard>
            );
          })}
        </PostCardContainer>
      </div>
    );
  }
}
