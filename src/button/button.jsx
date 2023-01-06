import styled, { css } from "styled-components";
import { Button as ElementButton } from "/src/elements";

const Button = styled(ElementButton)`
  font-weight: bold;
  color: #393f59;
  text-transform: uppercase;
  padding: 5px;
  border: 2px solid #02caca;
  cursor: pointer;
  box-shadow: none;
  display: block;
  background-color: ${(props) => props.theme.buttonColor};
  transition: background-color 0.3s;
  ${(props) => {
    const theme = props.theme.button[props.size || "medium"];

    return css`
      padding-right: ${theme.padding};
      padding-left: ${theme.padding};
      font-size: ${theme.fontSize};
      text-transform: ${theme.textTransform};
    `;
  }};

  &:hover {
    background-color: ${(props) => props.theme.buttonHover};
    color: ${(props) => props.theme.buttonColorHover};
  }

  &:active {
    background-color: ${(props) => props.theme.buttonActive};
    color: ${(props) => props.theme.buttonColorActive};
  }

  &:disabled {
    opacity: 0.7;
    box-shadow: none;
    pointer-events: none;
  }
`;

export default Button;
