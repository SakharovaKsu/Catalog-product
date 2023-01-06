import styled from "styled-components";
import Button from "/src/button/button";

export const Label = styled.label`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  border: 2px solid #02caca;
  height: 25px;
  width: 100%;
  margin-left: 10px;
`;

export const ButtonOrder = styled(Button)`
  padding: 10px 15px;
  margin: 0 auto;
`;
