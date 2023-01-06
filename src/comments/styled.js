import styled from "styled-components";
import { Li, P } from "/src/elements";

export const CoomentsLi = styled(Li)`
  margin-bottom: 10px;
`;

export const Text = styled(P)`
  font-size: 16px;
  line-height: 1.5;
  color: ${(props) => props.theme.textColor};
`;

export const Name = styled.span`
  display: block;
  font-weight: bold;
  font-size: 18px;
  color: ${(props) => props.theme.textColor};
  margin-bottom: 5px;
`;

export const CommentsDiv = styled.div`
  padding: 20px;
`;
