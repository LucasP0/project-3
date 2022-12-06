import styled, { css } from 'styled-components';

const TitleSize = {
  xsmall: (theme) => css`
    font-size: ${theme.fonts.sizes.xsmall};
  `,
  small: (theme) => css`
    font-size: ${theme.fonts.sizes.small};
  `,
  medium: (theme) => css`
  font-size: ${theme.fonts.sizes.medium};
  `,
  large: (theme) => css`
    font-size: ${theme.fonts.sizes.large};
  `,
  xlarge: (theme) => css`
   font-size: ${theme.fonts.sizes.xlarge};
  `,
  xxlarge: (theme) => css`
  font-size: ${theme.fonts.sizes.xxlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.fonts.sizes.huge};
  `,
  xhuge: (theme) => css`
    font-size: ${theme.fonts.sizes.xhuge};
  `,
};

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    ${TitleSize[size](theme)};
  `}
`;
