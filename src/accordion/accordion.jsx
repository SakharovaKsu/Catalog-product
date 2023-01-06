import React, { useState, useRef, useEffect } from "react";
import { Wrapper, TitleButton, ContentWrapper, Content } from "./stuled";

export default function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(0); // состояние, которое хранит выбранный индекс открытого элемента аккордеона
  const [height, setHeight] = useState(0); // состояния, в котором храниться высота контента активного элемента
  const openContent = useRef(null); // ссылку, которую в дальнейшем свяжем с элементом Content открытого элемента

  useEffect(() => {
    setHeight(openContent.current.offsetHeight);
  }, [height, activeIndex, items]); // Добавим useEffect, в котором будем сеттить состояние высоты высотой открытого элемента. В качестве зависимостей для useEffect передадим height и activeIndex
  // items для того что бы текст не образался при раскрытии

  return (
    <div>
      {items &&
        items.length &&
        items.map((item, index) =>
          index === activeIndex ? (
            <Wrapper key={item.title}>
              <TitleButton as="span" isActive>
                {item.title}
              </TitleButton>
              <ContentWrapper style={{ height }}>
                <Content ref={openContent}>{item.content}</Content>
              </ContentWrapper>
            </Wrapper>
          ) : (
            <Wrapper key={item.title}>
              <TitleButton onClick={() => setActiveIndex(index)}>
                {item.title}
              </TitleButton>
              <ContentWrapper>
                <Content>{item.content}</Content>
              </ContentWrapper>
            </Wrapper>
          )
        )}
    </div>
  );
}
