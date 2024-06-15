import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family:'Segoe UI','Apple Color Emoji',  'Noto Color Emoji';
    background: #caf0f8;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
