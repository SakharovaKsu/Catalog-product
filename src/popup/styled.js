import styled from "styled-components";
import Botton from "/src/button/button";

export const Wrapper = styled.div`
  border: 2px solid ${(props) => props.theme.buttonBorder};
  padding: ${(props) => props.theme.indent};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.buttonColorHover};
  min-width: 300px;
  z-index: 10;
`;

export const Close = styled(Botton)`
  position: absolute;
  top: 0;
  right: 5px;
  width: 25px;
  height: 25px;
  padding: 3px;
  line-height: 1;
  padding: 0;
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  border-bottom: 1px solid black;
  padding-bottom: 15px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 18px;
`;
