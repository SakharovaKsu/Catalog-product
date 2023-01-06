import React, { useState } from "react";
import Code from "../code/code";
import Counter from "../counter/counter";
import Description from "../description/description";
import Title from "../title/title";
import Popularity from "../popularity/popularity";
import {
  StyledProductPage,
  Header,
  ProductWrapper,
  ProductInfo,
  ProductInfoLine,
  PageFullPrice,
  StyledButton
} from "./styled";
import Tabs from "../tabs/tabs";
import Comments from "../comments/comments";
import PopUp from "/src/popup/popup";
import Slider from "../slider/slider";
import Accordion from "../accordion/accordion";

const MAX_TEXT_SIZE = 200;
const COMMENTS_COUNT = 3;

function ProductPage({ product, showInfoInAccordion }) {
  const [productCount, setProductCount] = useState(1);
  const [isShowPopup, setIsShowPopup] = useState(false); // Попап
  const [commentsShow, setCommentsShow] = useState(
    COMMENTS_COUNT
  ); /* состояние описания, где будем хранить флаг показа комментариев */
  const [isShowAllDescription, setIsShowAllDescription] = useState(
    false
  ); /* состояние описания, где будем хранить флаг показа описания товара целиком */

  const price = product.price * productCount;
  const oldPrice = product.oldPrice * productCount;

  const tabs = [
    {
      title: "Описание",
      content: (
        <Description
          // Условие - сколько символов нужно показывать
          text={
            isShowAllDescription
              ? product.description
              : product.description.slice(0, MAX_TEXT_SIZE)
          }
          onShowMore={() => setIsShowAllDescription(!isShowAllDescription)}
          isShowAllDescription={isShowAllDescription}
        />
      )
    },
    {
      title: "Комментарии",
      content: (
        <Comments
          comments={product.comments.slice(0, commentsShow)}
          onShowMore={() => setCommentsShow(commentsShow + COMMENTS_COUNT)}
          allCommentsLength={product.comments.length}
        />
      )
    }
  ];

  return (
    <StyledProductPage>
      <Header>
        <Title>{product.name}</Title>
        <Code>{product.code}</Code>
      </Header>
      <ProductWrapper>
        <Slider images={product.images} />
        <ProductInfo>
          <ProductInfoLine>
            Цена: <PageFullPrice oldPrice={oldPrice} price={price} />
          </ProductInfoLine>
          <ProductInfoLine>
            Количество:{" "}
            <Counter
              minValue={1}
              value={productCount}
              onChange={setProductCount}
            />
          </ProductInfoLine>
          <ProductInfoLine>
            <span>Доставка:</span> {product.delivery}
          </ProductInfoLine>
          <StyledButton size="large" onClick={() => setIsShowPopup(true)}>
            Купить
          </StyledButton>
          <Popularity count={product.comments.length} />
        </ProductInfo>
      </ProductWrapper>
      {showInfoInAccordion ? <Accordion items={tabs} /> : <Tabs tabs={tabs} />}
      <PopUp
        isShow={isShowPopup}
        onClose={() => setIsShowPopup(false)}
        title="Оформление доставки"
      ></PopUp>
    </StyledProductPage>
  );
}

export default ProductPage;
