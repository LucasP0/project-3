import { createGlobalStyle, css } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,900;1,900&family=Open+Sans:ital,wght@0,300;0,700;1,700&display=swap');

  *{
    margin:0px;
    padding: 0px;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    font-family: 'Open Sans', sans-serif;
  }
  h1 {
    font-family: 'Montserrat', sans-serif;
  }
`;
