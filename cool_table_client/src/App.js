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
import Quiz from "./Quiz";
import ForumPost from "./ForumPost";
import Signup from "./components/Signup";
import UserLogin from "./components/UserLogin";

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
    margin-right: 20px;
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
    background: lightblue;
    border: none;
    outline: none;
    border-bottom: 2px solid aqua;
    font-size: 16px;
    padding: 10px;
    margin-bottom: 10px;
    text-align: left;

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
  state = {
    isLoggedIn: false
  };

  render() {
    return (
      <>
        <GlobalStyles />
        <AppDiv>
          <Nav
            isLoggedIn={this.state.isLoggedIn}
            mobileNav={this.state.mobileNav}
          />
          <Spacer />
          <Route exact path="/" component={Login} />
          <Route path="/login" component={UserLogin} />
          <Route path="/register" component={Signup} />
          <Route path="/home" component={Home} />
          <Route path="/quiz" component={QuizHome} />
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="/quiz/form" component={QuizForm} />
          <Route path="/forum" component={ForumHome} />
          <Route path="/forum:id" component={SingleForum} />
          <Route path="/forum/post" component={ForumPost} />
        </AppDiv>
      </>
    );
  }
}

export default App;
