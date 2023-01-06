import styled, { css } from "styled-components";
import Button from "../button/button";
import { P } from "/src/elements";
import FullPrice from "../full-price/full-price";

const valueStyle = css`
  display: inline-flex;
  margin-left: ${(props) => props.theme.indent};
`;

export const StyledProductPage = styled.section`
  margin: 0 auto;
  padding: ${(props) => props.theme.indent};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  max-width: 800px;
  font-size: 16px;
  font-family: '"Lucida Sans Unicode", "Lucida Grande", sans-serif';
  color: ${(props) => props.theme.textColor};
`;

export const Header = styled.header`
  margin-bottom: ${(props) => props.theme.indent};
`;

export const ProductWrapper = styled.section`
  display: flex;
  align-items: flex-start;
  height: 100%;
  gap: 20px;
  margin-bottom: ${(props) => props.theme.indent};
`;

export const ProductInfo = styled.div`
  color: #666;
  font-size: 18px;
  border: 2px solid ${(props) => props.theme.buttonBorder};
  box-sizing: border-box;
  padding: ${(props) => props.theme.indent};
  width: 100%;
  min-height: 280px;
`;

export const ProductInfoLine = styled(P)`
  padding-bottom: ${(props) => props.theme.indent};
`;

export const PageFullPrice = styled(FullPrice)`
  ${valueStyle}
`;

export const StyledButton = styled(Button)`
  margin-top: 43px;
`;
