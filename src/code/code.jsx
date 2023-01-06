import styled from "styled-components";

export const Code = styled.span.attrs((props) => ({
  children: `Артикул: ${props.children}`
}))`
  color: ${(props) => props.theme.textColorAdditional};
  font-size: 12px;
`;

export default Code;
