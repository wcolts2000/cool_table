import React, { Component } from "react";
import { getSinglePost, deletePost } from "../../store/actions";
import { connect } from "react-redux";
import BackBtnAttribute from "../specializedComponents/backButton/BackBtnAttribute";
import BackButton from "../specializedComponents/backButton/BackButton";
import SingleForumPostModal from "./SingleForumPostModal";
import SingleForumPostCard from "./SingleForumPostCard";
import styled from "styled-components";
import SingleForumPostButtons from "./SingleForumPostButtons";

// ==============================
// =====  Styled Component  =====
// ==============================

const Div = styled.div`
  padding: 20px;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 180px);
`;

// ==============================
// =====      Component     =====
// ==============================

class SingleForumPost extends Component {
  state = {
    deleting: false
  };

  componentDidMount = () => {
    let id = this.props.match.params.id;
    this.props.getSinglePost(id);
  };

  cancelDelete = () => {
    this.setState({ deleting: false });
  };

  activateDelete = () => {
    this.setState({ deleting: true });
  };

  render() {
    let post = this.props.singlePost[0];

    if (!post) return <h4>Loading Post....</h4>;
    if (post.author.username.length) {
      return (
        <>
          {this.state.deleting && (
            <SingleForumPostModal
              deletePost={this.props.deletePost}
              history={this.props.history}
              match={this.props.match}
              token={this.props.token}
              cancelDelete={this.cancelDelete}
            />
          )}
          <Div>
            <BackButton props={this.props} />
            <SingleForumPostCard post={post} />
            {post.author.id === this.props.user.id && (
              <SingleForumPostButtons
                activateDelete={this.activateDelete}
                history={this.props.history}
              />
            )}
            <BackBtnAttribute />
          </Div>
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
)(SingleForumPost);
