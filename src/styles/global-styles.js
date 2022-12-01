import { createGlobalStyle, css } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  *{
    margin:0px;
    padding: 0px;
  }
  body {
    ${() => css`
    background: ${theme.colors.mainBg}
    `}
  }
`;
