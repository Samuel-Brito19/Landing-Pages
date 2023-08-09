import styled, { css } from 'styled-components'
import { Title as HeadingContainer } from '../Heading/styles'

export const Container = styled.div`
${({ theme }) => css``}
`;

export const Grid = styled.div`
${({ theme }) => css`
counter-reset: grid-counter;
display: grid;
grid-template-columns: repeat(auto-fill, minMax(280px, 1fr));
gap: ${theme.spacings.large};
`}
`;

export const GridElement = styled.div`
${({ theme }) => css`
${HeadingContainer} {
  position: relative;
  left: 5rem;

}

${HeadingContainer}::before {
  counter-increment: grid-counter;
  content: counter(grid-counter);
  position: absolute;
  font-size: ${theme.font.sizes.xhuge};
  top: -2rem;
  left: -5rem;
  transform: rotate(5deg);


}
`}
`;
