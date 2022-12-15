import styled, { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme, colorDark, size }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
  `}
`;
