import React, { Component } from 'react';

import styled from 'styled-components';

const NavbarBase = styled.nav`
  width: 100%;
  height: 94px;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  body {
    --bodyPaddingTop: 94px;
    padding-top: var(--bodyPaddingTop);
  }

  @media (max-width: 800px) {
    height: auto;
    justify-content: center;
    font-size: 1rem;

    & h4 {
      font-size: 1.8rem;
    }

    body {
      --bodyPaddingTop: 40px;
      padding-top: var(--bodyPaddingTop);
    }
  }
`;

const Main = styled.main`
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

const FooterBase = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: white;
  text-align: center;

  & span {
    font-size: 1.2rem;
  }

  & a {
    color: white;
    cursor: pointer;
  }
  @media (max-width: 800px) {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;

    & span {
      font-size: 1.1rem;
    }
  }
`;

export default class PageDefault extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <NavbarBase className="teal">
          <div className="nav-wrapper">
            <h4>React Bootcamp Notas</h4>
          </div>
        </NavbarBase>

        <Main>{children}</Main>

        <FooterBase className="teal">
          <span>
            Desenvolvido por{' '}
            <a
              href="https://t.me/Dev_felipe_marques"
              target="_blank"
              rel="noopener noreferrer"
            >
              Felipe Marques
            </a>{' '}
          </span>
        </FooterBase>
      </>
    );
  }
}
