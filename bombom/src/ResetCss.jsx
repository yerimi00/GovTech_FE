// src/ResetCss.jsx
import { createGlobalStyle } from "styled-components";

const ResetCss = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap');
@font-face {
    font-family: 'Cafe24SsurroundAir';
    src: url('https://gcore.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24SsurroundAir.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }

  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
  }

  .cafe-font {
    font-family: 'Cafe24SsurroundAir', sans-serif;
  }
`;

export default ResetCss;
