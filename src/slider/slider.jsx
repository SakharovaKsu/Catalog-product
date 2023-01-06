import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";
// Swiper — компонент-обёртка слайдера, в него и будем вкладывать слайды
// SwiperSlide — компонент-обёртка для слайда, каждый слайд нужно оборачивать в этот компонент
import "swiper/swiper.scss";
// стили для слайдера
import SwiperCore, { Navigation } from "swiper";
// SwiperCore — это ядро слайдера. С его помощью к слайдеру можно подключать различные модули, например, Navigation
import { Image } from "/src/elements";
import { StyledSlider, StyledButton, StyledWrapper } from "./styled";

function Slider({ images }) {
  SwiperCore.use([Navigation]);

  /* Две ссылки для создания своих кнопок и подключаем их в разметке*/
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <StyledWrapper>
      <StyledButton left ref={navigationPrevRef} title="Назад">
        &lt;
      </StyledButton>
      <StyledButton right ref={navigationNextRef} title="Вперед">
        &gt;
      </StyledButton>
      <StyledSlider
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current
        }}
        freeMode
        watchSlidesProgress
        slidesPerView={1}
        spaceBetween={20}
        loop
      >
        {images &&
          images.length &&
          images.map((image) => (
            <SwiperSlide key={image}>
              <Image
                src={image}
                alt="изображение продукта"
                width="230"
                height="300"
                maxWidth="350"
              />
            </SwiperSlide>
          ))}
      </StyledSlider>
    </StyledWrapper>
  );
}

export default Slider;

// Пояснение
/* Чтобы кнопки переключали, ссылки на эти кнопки нужно передать в Swiper */
/* Чтобы инициализировать кнопки, нужно использовать props Свайпера onBeforeInit и передать туда функцию */
/* Нашими ссылками она инициализирует кнопки Свайпера на кастомные кнопки. */
// onBeforeInit={(swiper) => {
//   swiper.params.navigation.prevEl = navigationPrevRef.current;
//   swiper.params.navigation.nextEl = navigationNextRef.current;
// }}

/* Далее через props navigation нужно указать Swiper кнопки для навигации: */
// navigation={{
//   prevEl: navigationPrevRef.current,
//   nextEl: navigationNextRef.current
// }}

// freeMode
// watchSlidesProgress
// slidesPerView={1} /* slidesPerView — определяет, сколько слайдов нужно отобразить одновременно. В нашем случае это 1; */
// spaceBetween={20} /* spaceBetween — расстояние между слайдами (20px)*/
// loop={true} /* loop — бесконечная прокрутка (true). */
