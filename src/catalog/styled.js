import styled from "styled-components";
import { Ul, Li } from "/src/elements";
import { Link } from "react-router-dom";

export const List = styled(Ul)`
  margin-top: ${(props) => props.theme.indent};
  display: flex;
  gap: ${(props) => props.theme.indent};
`;

export const ListItem = styled(Li)`
  width: 200px;
  margin-bottom: ${(props) => props.theme.indent};
  font-size: 14px;
  border: 2px solid ${(props) => props.theme.buttonBorder};
  padding: 5px;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.textColor};
  text-decoration: none;
`;
