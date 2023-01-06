import styled from "styled-components";
import Title from "/src/title/title";

export const TitleList = styled.div`
  display: inline-flex;
  background-color: #ddd;
  overflow: hidden;
`;

export const TitleButton = styled.button`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border: 2px solid ${(props) => props.theme.buttonBorder};
  cursor: pointer;
  box-shadow: none;
  display: block;
  background-color: ${(props) => (props.active ? "#464F59" : "none")};
`;

export const TitleText = styled(Title)`
  color: ${(props) => (props.active ? "#CBF1F5" : "#888")};
  font-weight: ${(props) => (props.active ? "#bold" : "normal")};
`;

export const Content = styled.div`
  margin-top: -2px;
  border: 2px solid ${(props) => props.theme.buttonBorder};
  padding: ${(props) => props.theme.indent};
  line-height: 1.5;
  font-size: 16px;
  box-sizing: border-box;
  text-align: left;
`;
