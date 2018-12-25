import React, { Component } from "react";
import { fetchPosts, setSearchField } from "../../store/actions";
import { connect } from "react-redux";
import ForumList from "./ForumList";
import ErrorBoundary from "../specializedComponents/ErrorBoundary";
import PostSearch from "./PostSearch";

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
        .includes(this.props.searchField.toLowerCase());
    });
  };

  render() {
    let { isLoggedIn, requesting, onSearchChange } = this.props;
    return (
      <div style={{ paddingTop: 50 }}>
        <PostSearch searchChange={onSearchChange} />
        {isLoggedIn ? (
          <button onClick={() => this.props.history.push("/forum/post")}>
            Add A Post
          </button>
        ) : null}
        {requesting ? (
          <h1>Loading...</h1>
        ) : (
          <ErrorBoundary>
            <ForumList posts={this.filterPosts()} {...this.props} />
          </ErrorBoundary>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({
  userReducer: { isLoggedIn },
  postsReducer: { requesting, filteredPosts, posts },
  searchPosts: { searchField }
}) => ({
  isLoggedIn,
  requesting,
  filteredPosts,
  searchField,
  posts
});

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    fetchPosts: () => dispatch(fetchPosts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForumHome);
