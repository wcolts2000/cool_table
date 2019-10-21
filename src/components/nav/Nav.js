import React from "react";
import styled from "styled-components";
import MobileNav from "./MobileNav";
import NavBarRight from "./NavBarRight";
import HamburgerIcon from "./HamburgerIcon";
import NavBarLeft from "./NavBarLeft";

// ==============================
// =====      Component     =====
// ==============================

export default function Nav({ isLoggedIn, navOpen, mobilenavopen, user }) {
  return (
    <>
      <NavBar>
        <NavBarLeft isLoggedIn={isLoggedIn} user={user} />
        <NavBarRight />
        <HamburgerIcon mobilenavopen={mobilenavopen} navOpen={navOpen} />
      </NavBar>
      <MobileNav mobilenavopen={mobilenavopen} navOpen={navOpen} />
    </>
  );
}

// ==============================
// =====  Styled Component  =====
// ==============================

const NavBar = styled.nav`
  width: 100%;
  position: fixed;
  color: white;
  background: #0f0f0f;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 200;

  @media (max-width: 500px) {
    justify-content: flex-start;
    padding-left: 20px;
  }
`;
