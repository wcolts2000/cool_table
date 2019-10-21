import React, { Component } from "react";
import { connect } from "react-redux";
import { logUserOut } from "../../store/actions";
import styled from "styled-components";
import gates from "../../img/garden-gates.jpg";

// ==============================
// =====      Component     =====
// ==============================

class LogOut extends Component {
  render() {
    return (
      <Div>
        <button
          onClick={() => {
            return (
              localStorage.removeItem("user"),
              localStorage.removeItem("token"),
              this.props.logUserOut(),
              this.props.history.push("/")
            );
          }}
        >
          logout
        </button>
      </Div>
    );
  }
}

const mapStateToProps = ({ userReducer: { user, token, isLoggedIn } }) => ({
  user,
  token,
  isLoggedIn
});

export default connect(
  mapStateToProps,
  { logUserOut }
)(LogOut);

// ==============================
// =====  Styled Component  =====
// ==============================

const Div = styled.div`
  background-image: url(${gates});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 70px);
`;
