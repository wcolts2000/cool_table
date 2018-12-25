import React, { Component } from "react";
import { fetchPosts } from "../store/actions";
import { connect } from "react-redux";
import ForumList from "./ForumList";

// ==============================
// =====      Component     =====
// ==============================

// let moment = require("moment");
class ForumHome extends Component {
  state = {
    search: ""
  };

  componentDidMount = () => {
    this.props.fetchPosts();
  };

  filterPosts = () => {
    return this.props.posts.filter(post => {
      return post.title
        .toLowerCase()
        .includes(this.props.filteredPosts.toLowerCase());
    });
  };

  render() {
    let { isLoggedIn } = this.props;
    return (
      <div style={{ paddingTop: 50 }}>
        <input
          type="search"
          aria-label="Search"
          value={this.props.filteredPosts}
          placeholder="Filter Posts By Title  ..."
          onChange={this.filterPosts}
        />
        {isLoggedIn ? (
          <button onClick={() => this.props.history.push("/forum/post")}>
            Add A Post
          </button>
        ) : null}
        {/* <PostCardContainer>
          {posts.map(({ id, title, created_at, body, author }) => {
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
        </PostCardContainer> */}
        <ForumList posts={this.filterPosts()} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn,
  filteredPosts: state.postsReducer.filteredPosts,
  posts: state.postsReducer.posts
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(ForumHome);
