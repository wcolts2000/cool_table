import React, { Component } from "react";
import styled from "styled-components";

// ==============================
// =====  Styled Component  =====
// ==============================

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

class SingleForumPostModal extends Component {
  handleDeletePost = (id, token) => {
    this.props.deletePost(id, token);
    this.props.history.push("/forum");
  };

  render() {
    let { match, token, cancelDelete } = this.props;
    return (
      <Modal>
        <button
          style={{
            background: "darkred",
            color: "#fff",
            marginRight: 15
          }}
          onClick={() => this.handleDeletePost(match.params.id, token)}
        >
          YES...DELETE
        </button>{" "}
        <button onClick={cancelDelete}>CANCEL</button>
      </Modal>
    );
  }
}

export default SingleForumPostModal;
