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
        back icon by{" "}
        <a
          href="https://www.flaticon.com/authors/gregor-cresnar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gregor Cresnar
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
