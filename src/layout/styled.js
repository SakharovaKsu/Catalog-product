import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  width: 600px;
  margin: 0 auto;
`;

export const Nav = styled.nav`
  padding-left: ${(props) => props.theme.indent};
  padding-right: ${(props) => props.theme.indent};
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: ${(props) => props.theme.indent};
  background-color: ${(props) => props.theme.buttonColor};
  color: ${(props) => props.theme.textColor};
`;

export const NavLinkStyles = styled(NavLink)`
  color: ${(props) => props.theme.textColor};
  text-decoration: none;
  text-transform: uppercase;
`;
