import React, { Component } from "react";
import axios from "axios";
import { URL } from "../App";
import styled from "styled-components";

// ==============================
// =====  Styled Component  =====
// ==============================

const Card = styled.div`
  padding: 20px;
  color: #0f0f0f;
  background: #eadbb4;
  overflow: hidden;
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
export default class SingleForum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  }

  componentDidMount = () => {
    let id = this.props.match.params.id;

    axios
      .get(`${URL}posts/${id}`)
      .then(({ data }) => this.setState({ post: data }))
      .catch(err => console.log(err));
  };

  render() {
    let post = this.state.post;
    if (!post.author) return <h4>Loading Post....</h4>;

    return (
      <div style={{ padding: 20 }}>
        <Card>
          <h1>
            {post.title}{" "}
            <span style={{ fontSize: 16, opacity: 0.7 }}>
              posted by:{" "}
              <img
                src={`${post.author.img_url}`}
                alt="[ __ users avatar goes here __ ]"
                style={{ width: 20 }}
              />
              &nbsp;
              {post.author.username}
            </span>
          </h1>
          <p>{post.body}</p>
          <p>{moment.utc(post.created_at).format("MMMM Do YYYY, hh:mm a")}</p>
        </Card>
      </div>
    );
  }
}
