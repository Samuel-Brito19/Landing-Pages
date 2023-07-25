import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `
}


const titleCase = (upperCase) => css`
  text-transform: ${upperCase ? 'upperCase' : 'none'};
`
export const Title = styled.div`
  ${({ theme, colorDark, size, upperCase }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSize[size](theme)}
    ${titleCase(upperCase)}
  `}
`;
