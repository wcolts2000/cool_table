import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// ==============================
// =====      Component     =====
// ==============================

function MobileNav({ mobilenavopen, navOpen }) {
  return (
    <Mobile mobilenavopen={mobilenavopen === 'open' ? 'open' : 'closed'}>
      <MobileStyledNavLink
        mobilenavopen={mobilenavopen === 'open' ? 'open' : 'closed'}
        to="/home"
        onClick={() => navOpen(mobilenavopen)}
      >
        Home
      </MobileStyledNavLink>
      <MobileStyledNavLink
        mobilenavopen={mobilenavopen === 'open' ? 'open' : 'closed'}
        to="/quiz"
        onClick={() => navOpen(mobilenavopen)}
      >
        Quizzes
      </MobileStyledNavLink>
      <MobileStyledNavLink
        mobilenavopen={mobilenavopen === 'open' ? 'open' : 'closed'}
        to="/forum"
        onClick={() => navOpen(mobilenavopen)}
      >
        Forum
      </MobileStyledNavLink>
    </Mobile>
  );
}

export default MobileNav;


// ==============================
// =====  Styled Component  =====
// ==============================

const Mobile = styled.div`
  background: #0f0f0f;
  width: 100%;
  text-align: center;
  letter-spacing: 3px;
  font-size: 20px;
  flex-direction: column;
  transition: all 0.8s ease-in-out;
  top: ${props => (props.mobilenavopen === 'open' ? 0 : '-230px')};
  padding-top: 70px;
  display: flex;
  box-shadow: ${props =>
    props.mobilenavopen === 'open' ? '1px 3px 60px rgba(0,200,220,.6)' : null};
  position: fixed;
  z-index: 100;
`;

const MobileStyledNavLink = styled(Link)`
  text-decoration: none;
  z-index: 150;
  color: aqua;
  font-weight: bolder;
  padding: 25px 0;
  text-transform: uppercase;
  border-bottom: 2px solid aqua;
  transition: all 0.3s ease-in-out;
  pointer-events: ${props =>
    props.mobilenavopen === 'open' ? 'initial' : 'none'};

  &:first-child {
    border-top: 2px solid aqua;
  }

  &:hover {
    background: aqua;
    color: #0f0f0f;
  }
`;