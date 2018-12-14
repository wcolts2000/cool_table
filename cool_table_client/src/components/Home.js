import React, { Component } from "react";
import styled from "styled-components";
import rubix from "../img/rubix.jpg";
import posts from "../img/posts.jpg";
import { Link } from "react-router-dom";

// ==============================
// =====  Styled Component  =====
// ==============================

const H1 = styled.h1`
  display: inline-block;
  font-size: 80px;
  background: aqua;
  padding: 7px 15px;
  border-radius: 7px;
  box-shadow: -1px 3px 7px rgba(0, 0, 0, 0.3);

  @media (max-width: 400px) {
    width: 100%;
    border-radius: 0;
    font-size: 60px;
  }
`;

const H2 = styled.h2`
  text-transform: uppercase;
  color: aqua;
  background: #0f0f0f;
  padding: 7px 15px;
  border-radius: 7px;
  max-width: 50%;
  margin: 20px auto 0px;
  display: block;
  width: 200px;
`;

const Span = styled.span`
  font-weight: normal;
  opacity: 0.8;
`;

const Container = styled.div`
  display: flex;
  max-width: 900px;
  margin: 0 auto;
  justify-content: center;

  @media (max-width: 650px) {
    flex-direction: column;
  }

  & > figure {
    cursor: pointer;
    background: burlywood;
    padding: 20px;
    border-radius: 7px;
    box-shadow: -1px 3px 7px rgba(0, 0, 0, 0.2);
    font-size: 22px;
    text-transform: uppercase;
    color: black;
    font-weight: bolder;
    max-width: 250px;
    margin: 0 auto 30px;

    & > img {
      width: 200px;
      border-radius: 7px;
      margin-bottom: 20px;
      border: 10px double aqua;
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;

const LinkBox = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: none;

  @media (max-width: 650px) {
    display: block;
  }
`;

// ==============================
// =====      Component     =====
// ==============================

export default class Home extends Component {
  render() {
    return (
      <>
        <H2>Welcome to</H2>
        <H1>
          Cool<Span>Table</Span>
        </H1>
        <Container>
          <LinkBox>
            <Link to="/quiz" style={{ marginRight: 15 }}>
              <button>QUIZ</button>
            </Link>
            <Link to="/forum">
              <button>FORUM</button>
            </Link>
          </LinkBox>
          <figure onClick={() => this.props.history.push("/quiz")}>
            <img src={rubix} alt="rubix cubes stacked on each other" />
            <figcaption>Quiz Me</figcaption>
          </figure>
          <figure onClick={() => this.props.history.push("/forum")}>
            <img src={posts} alt="sticky notes, pens, a phone and books" />
            <figcaption>Go to Forum</figcaption>
          </figure>
        </Container>
      </>
    );
  }
}

// import { Route, Redirect } from 'react-router'

// <Route exact path="/" render={() => (
//   loggedIn ? (
//     <Redirect to="/dashboard"/>
//   ) : (
//     <PublicHomePage/>
//   )
// )}/>
