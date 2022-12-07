import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background: linear-gradient(180.07deg, #DDE0E3 0.08%, #F4F4F4 99.96%);
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  #root {
    margin: 0 auto;
  }

  .swiper {
    margin-top: 16px;
    margin-left: initial;
    max-width: 100%;
  }

  .swiper-slide {
    width: 72px !important;
  }
  
  .with-navigation .swiper-wrapper {
    margin-left: 32px;
  }

  .swiper-button-next {
    background-image: url(../../public/arrow-right.svg);
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    height: 72px;
    top: 22px;
    right: 0;
    background-color: #fcfcfc;
  }

  .swiper-button-prev {
    background-image: url(../../public/arrow-left.svg);
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    cursor: auto;
    pointer-events: none;
    height: 72px;
    top: 22px;
    background-color: #fcfcfc;
    opacity: 1 !important;
    left: 0;
  }

  .swiper-button-next::after {
    display: none;
  }
  .swiper-button-prev::after {
    display: none;
  }
`;
