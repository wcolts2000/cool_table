import React, { Component } from "react";
import styled from "styled-components";
import { getSinglePost } from "../store/actions";
import { connect } from "react-redux";

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
class SingleForum extends Component {
  componentDidMount = () => {
    let id = this.props.match.params.id;
    this.props.getSinglePost(id);
  };

  render() {
    let post = this.props.singlePost[0];

    if (!post) return <h4>Loading Post....</h4>;
    if (post.author.username.length) {
      return (
        <div style={{ padding: 20 }}>
          <Card>
            <h1>
              {post.title}{" "}
              <span style={{ fontSize: 16, opacity: 0.7 }}>
                posted by:{" "}
                {post.author.img_url !== null ? (
                  <img
                    src={`${post.author.img_url}`}
                    alt="[ __ users avatar goes here __ ]"
                    style={{ width: 20 }}
                  />
                ) : null}
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
    return null;
  }
}

const mapStateToProps = ({ singlePost }) => ({
  singlePost
});

export default connect(
  mapStateToProps,
  { getSinglePost }
)(SingleForum);
