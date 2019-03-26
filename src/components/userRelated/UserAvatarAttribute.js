import React from "react";
import styled from "styled-components";

// ==============================
// =====  Styled Component  =====
// ==============================

const P = styled.p``;

// ==============================
// =====      Component     =====
// ==============================

export default function EyeIconAttribute() {
  return (
    <div>
      <P>
        user avatars by{" "}
        <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">
          www.Icons8.com
        </a>
      </P>
    </div>
  );
}
