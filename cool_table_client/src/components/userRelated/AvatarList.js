import React from "react";
import styled from "styled-components";

// ==============================
// =====  Styled Component  =====
// ==============================

const Div = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto 15px;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
  background: #0f0f0f;
  padding: 5px;
  margin: 2px;
`;

// ==============================
// =====      Component     =====
// ==============================

function AvatarList({ avatarSelect }) {
  return (
    <Div>
      <Img
        onClick={avatarSelect}
        alt="user avatar"
        src="https://img.icons8.com/color/48/000000/andorian-head.png"
      />
      <Img
        onClick={avatarSelect}
        alt="user avatar"
        src="https://img.icons8.com/color/48/000000/avatar.png"
      />
      <Img
        onClick={avatarSelect}
        alt="user avatar"
        src="https://img.icons8.com/color/48/000000/kawaii.png"
      />
      <Img
        onClick={avatarSelect}
        alt="user avatar"
        src="https://img.icons8.com/color/48/000000/anonymous-mask.png"
      />
      <Img
        onClick={avatarSelect}
        alt="user avatar"
        src="https://img.icons8.com/color/48/000000/ninja-head.png"
      />
    </Div>
  );
}

export default AvatarList;
