// global.js
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}
  * {
    box-sizing: border-box;
  }
  
  html {
    font-family: 'NanumSquare', sans-serif;
    background-color: #000;
    color: #fff;
  }

  body {
    
  }

  button {

  }

  ul, li {
    list-style: none;
  }

  img {
			
  }
`;

export default GlobalStyles;
