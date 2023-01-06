import React from "react";
import { P } from "/src/elements";
import styled from "styled-components";

const PopularityP = styled(P)`
  color: #02caca;
  margin-top: 10px;
  text-transform: uppercase;
`;

export default function Popularity({ count }) {
  let result = null;

  if (count === 0) {
    result = <PopularityP>Будь первым! Поделись впечатлениями</PopularityP>;
  }

  if (count < 5) {
    result = <PopularityP>Проверенный товар</PopularityP>;
  }

  return result;
}
