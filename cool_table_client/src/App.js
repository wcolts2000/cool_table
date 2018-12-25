import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import Intro from "./components/Intro";
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
import Login from "./components/Login";
import { connect } from "react-redux";
import { navOpen, localLogIn } from "./store/actions";
import LogOut from "./components/LogOut";

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
      color: #0f0f0f;
      opacity: .7;
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

class App extends Component {
  componentDidMount = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    let token = localStorage.getItem("token");
    if (user && token) return this.props.localLogIn(user, token);
  };

  componentDidUpdate = prevProps => {
    if (
      prevProps.user !== this.props.user &&
      prevProps.token !== this.props.token
    )
      return (
        localStorage.setItem("user", JSON.stringify(this.props.user)),
        localStorage.setItem("token", this.props.token)
      );
  };

  render() {
    return (
      <>
        <GlobalStyles />
        <AppDiv>
          <Nav
            isLoggedIn={this.props.isLoggedIn}
            mobilenavopen={this.props.mobilenavopen}
            navOpen={this.props.navOpen}
          />
          <Spacer />
          <Route exact path="/" component={Intro} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={LogOut} />
          <Route path="/register" component={Signup} />
          <Route path="/home" component={Home} />
          <Route exact path="/quiz" component={QuizHome} />
          <Route path="/quiz/single-quiz/:id" component={Quiz} />
          <Route path="/quiz/form" component={QuizForm} />
          <Route exact path="/forum/" component={ForumHome} />
          <Route path="/forum/post" component={ForumPost} />
          <Route path="/forum/single-post/:id" component={SingleForum} />
        </AppDiv>
      </>
    );
  }
}

const mapStateToProps = ({
  userReducer: { user, token, isLoggedIn },
  navReducer: { mobilenavopen }
}) => ({
  user,
  token,
  isLoggedIn,
  mobilenavopen
});

export default withRouter(
  connect(
    mapStateToProps,
    { navOpen, localLogIn }
  )(App)
);
