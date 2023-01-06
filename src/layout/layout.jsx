import React from "react";
import { Wrapper, Nav, NavLinkStyles } from "./styled";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <Wrapper>
      <Nav>
        <NavLinkStyles to="/">Каталог</NavLinkStyles>
      </Nav>
      <main>
        <Outlet />
      </main>
    </Wrapper>
  );
}

export default Layout;
