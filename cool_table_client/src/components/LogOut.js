import React, { Component } from "react";
import { connect } from "react-redux";
import { logUserOut } from "../store/actions";

class LogOut extends Component {
  render() {
    return (
      <div style={{ padding: 60 }}>
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
      </div>
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
