import React from "react";
import styled from "styled-components";

// ==============================
// =====      Component     =====
// ==============================

function EditUserCard({ user: { img_url, username }, stateUser }) {
  // console.log(user);

  return (
    <Div>
      <img
        src={img_url}
        alt="User Avatar"
        style={{
          height: "120px",
          width: "120px",
          objectFit: "cover",
          margin: "20px 10px",
          borderRadius: "50%"
        }}
      />
      <div style={{ padding: "10px" }}>
        <p>What other users see as your username:</p>
        {stateUser ? <h3>{stateUser}</h3> : <h3>{username}</h3>}
      </div>
    </Div>
  );
}

export default EditUserCard;

// ==============================
// =====  Styled Component  =====
// ==============================

const Div = styled.div`
  width: 90%;
  max-width: 400px;
  margin: 20px auto;
  border-radius: 20px;
  padding: 10px;
  background: #0f0f0f;
  color: aqua;
  display: flex;
`;
