import React from "react";
import styled from "styled-components";

// ==============================
// =====  Styled Component  =====
// ==============================

const P = styled.p``;

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
        from <a href="https://www.flaticon.com/">www.flaticon.com</a>
      </P>
    </div>
  );
}
