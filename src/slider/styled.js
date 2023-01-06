import styled from "styled-components";
import { Swiper } from "swiper/react";
import Button from "../button/button";

export const StyledSlider = styled(Swiper)`
  width: 230px;
  height: 300px;
`;

export const StyledWrapper = styled.div`
  position: relative;
`;

export const StyledButton = styled(Button)`
  position: absolute;
  z-index: 10;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => (props.left ? "-3px" : "auto")};
  right: ${(props) => (props.right ? "-3px" : "auto")};
  width: 25px;
  height: 25px;
  padding: 3px;
  line-height: 1;
  padding: 0;
`;
