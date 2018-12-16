import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import QuizHome from "./components/QuizHome";
import QuizForm from "./components/QuizForm";
import ForumHome from "./components/ForumHome";
import SingleForum from "./components/SingleForum";
import styled, { createGlobalStyle } from "styled-components";
import Nav from "./components/Nav";
import Quiz from "./components/Quiz";
import ForumPost from "./ForumPost";
import Signup from "./components/Signup";
import UserLogin from "./components/UserLogin";
import { connect } from "react-redux";
import { navOpen } from "./store/actions";

// ==============================
// =====  Styled Component  =====
// ==============================

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    background: papayawhip;
  }

  .active {
    opacity: .6;
  }

  button {
    padding: 8px 30px;
    border: 3px solid aqua;
    position: relative;
    outline: none;
    cursor: pointer;
    box-shadow: 0 4px aqua;
    text-align: center;
    background: white;
    color: aqua;
    font-size: 16px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 10px;
    border-radius: 50px;
    font-weight: bolder;
    background: #0f0f0f;

    &:hover {
      box-shadow: 0 2px aqua;
      top: 2px;
      opacity: .7;
    }

    &:active {
      box-shadow: none;
      top: 4px;
      opacity: .6;
    }
  }

  input {
    background: #deb887;
    border: none;
    outline: none;
    border-bottom: 2px solid aqua;
    font-size: 16px;
    padding: 15px 20px;
    text-align: left;
    display: block;
    border-radius: 50px;
    margin: 0 auto;
    color: #0f0f0f;
    margin-bottom: 20px;
    width: 80%;
    max-width: 400px;

    &::placeholder {
      color: white;
      text-shadow: -1px 2px rgba(0,0,0,.3);
    }

    &:focus {
      border: none;
      outline: none;
      border-bottom: 2px solid green;
    }
  }
`;

const AppDiv = styled.div`
  text-align: center;
`;

const Spacer = styled.div`
  height: 70px;
`;

// ==============================
// =====      Component     =====
// ==============================

export const URL = "https://lambda-study-app.herokuapp.com/api/";
class App extends Component {
  // state = {
  //   isLoggedIn: false,
  //   mobilenavopen: "false",
  //   token: "",
  //   user: {}
  // };

  // componentDidUpdate = prevProps => {
  //   if (prevProps.location !== this.props.location) {
  //     this.setState({ mobilenavopen: "false" });
  //   }
  //   return null;
  // };

  // navOpen = () => {
  //   this.setState({
  //     mobilenavopen: this.state.mobilenavopen === "false" ? "true" : "false"
  //   });
  // };

  // logIn = ({ token, user }) => {
  //   this.setState({
  //     isLoggedIn: true,
  //     token: token,
  //     user: user
  //   });
  // };

  // logout = () => {
  //   this.setState({
  //     isLoggedIn: false
  //   });
  //   this.props.history.push("/");
  // };

  render() {
    return (
      <>
        <GlobalStyles />
        <AppDiv>
          <Nav
            isLoggedIn={this.props.isLoggedIn}
            mobilenavopen={this.props.mobilenavopen}
            navOpen={navOpen}
            props={this.props}
            // logout={this.logout}
          />
          <Spacer />
          <Route exact path="/" component={Login} />
          <Route
            path="/login"
            render={props => <UserLogin logIn={this.logIn} {...props} />}
          />
          <Route
            path="/register"
            render={props => <Signup logIn={this.logIn} {...props} />}
          />
          <Route path="/home" component={Home} />
          <Route
            exact
            path="/quiz"
            render={props => (
              <QuizHome isLoggedIn={this.state.isLoggedIn} {...props} />
            )}
          />
          <Route path="/quiz/single-quiz/:id" component={Quiz} />
          <Route path="/quiz/form" component={QuizForm} />
          <Route
            exact
            path="/forum/"
            render={props => (
              <ForumHome isLoggedIn={this.state.isLoggedIn} {...props} />
            )}
          />
          <Route path="/forum/post" component={ForumPost} />
          <Route path="/forum/single-post/:id" component={SingleForum} />
        </AppDiv>
      </>
    );
  }
}

const mapStateToProps = ({ user, token, isLoggedIn, mobilenavopen }) => ({
  user,
  token,
  isLoggedIn,
  mobilenavopen
});

export default connect(
  mapStateToProps,
  { navOpen }
)(App);
