import React from "react";
import styled from "styled-components";

// ==============================
// =====  Styled Component  =====
// ==============================

const P = styled.p`
  background: #deb887;
  display: inline;
  font-size: 12px;
  padding: 10px;
  text-transform: uppercase;
  letter-spacing: 1.2;
  border-radius: 3px;
  box-shadow: -1px 2px rgba(0, 0, 0, 0.3);

  & > a {
    background: #0f0f0f;
    padding: 3px 6px;
    display: inline-block;
    color: aqua;
    text-decoration: none;
    border-radius: 3px;
  }
`;

// ==============================
// =====      Component     =====
// ==============================

export default function BackBtnAttribute() {
  return (
    <div>
      <P>
        back icon by{" "}
        <a
          href="https://www.flaticon.com/authors/roundicons"
          target="_blank"
          rel="noopener noreferrer"
        >
          RoundIcons
        </a>{" "}
        from{" "}
        <a
          href="https://www.flaticon.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.flaticon.com
        </a>
      </P>
    </div>
  );
}
