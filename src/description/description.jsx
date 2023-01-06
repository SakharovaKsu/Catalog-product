import React from "react";
import { ButtonDescription, DescriptionText, H2 } from "./styled";

export default function Description({
  text,
  onShowMore,
  isShowAllDescription
}) {
  return (
    <DescriptionText>
      <H2>Характеристики</H2>
      <span>{text}</span>
      <ButtonDescription type="button" size="medium" onClick={onShowMore}>
        {isShowAllDescription ? "Cкрыть" : "Подробнее"}
      </ButtonDescription>
    </DescriptionText>
  );
}
