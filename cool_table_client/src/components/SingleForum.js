import React, { Component } from "react";
import styled from "styled-components";
import { getSinglePost, deletePost } from "../store/actions";
import { connect } from "react-redux";
import BackBtnAttribute from "./BackBtnAttribute";
import BackButton from "./BackButton";

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

const Modal = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

// ==============================
// =====      Component     =====
// ==============================

let moment = require("moment");
class SingleForum extends Component {
  state = {
    deleting: false
  };
  componentDidMount = () => {
    let id = this.props.match.params.id;
    this.props.getSinglePost(id);
  };

  render() {
    let post = this.props.singlePost[0];
    console.log("POST", post);

    if (!post) return <h4>Loading Post....</h4>;
    if (post.author.username.length) {
      return (
        <>
          {this.state.deleting && (
            <Modal>
              <button
                style={{
                  background: "darkred",
                  color: "#fff",
                  marginRight: 15
                }}
                onClick={() => {
                  return (
                    this.props.deletePost(
                      this.props.match.params.id,
                      this.props.token
                    ),
                    this.props.history.push("/forum")
                  );
                }}
              >
                YES...DELETE
              </button>{" "}
              <button onClick={() => this.setState({ deleting: false })}>
                CANCEL
              </button>
            </Modal>
          )}
          <div
            style={{
              padding: 20,
              paddingTop: 70,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "calc(100vh - 180px)"
            }}
          >
            <BackButton props={this.props} />
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
              <p>
                {moment.utc(post.created_at).format("MMMM Do YYYY, hh:mm a")}
              </p>
            </Card>
            {post.author.id === this.props.user.id && (
              <div>
                <button
                  style={{ marginRight: 15 }}
                  onClick={() => {
                    return this.props.history.push("/forum/post");
                  }}
                >
                  EDIT
                </button>{" "}
                <button onClick={() => this.setState({ deleting: true })}>
                  DELETE
                </button>
              </div>
            )}
            <BackBtnAttribute />
          </div>
        </>
      );
    }
    return null;
  }
}

const mapStateToProps = ({
  postsReducer: { singlePost },
  userReducer: { token, user }
}) => ({
  singlePost,
  token,
  user
});

export default connect(
  mapStateToProps,
  { getSinglePost, deletePost }
)(SingleForum);
