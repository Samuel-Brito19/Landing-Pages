import styled, { css } from 'styled-components'
import { Title as HeadingContainer } from '../Heading/styles'
import { Container as TextComponent } from '../TextComponent/styles'

export const Container = styled.div`
${({ theme }) => css`
${TextComponent} {
  margin-bottom: ${theme.spacings.xhuge};
}

`}
`;

export const Grid = styled.div`
${({ theme }) => css`
display: grid;
grid-template-columns: repeat(auto-fill, minMax(280px, 1fr));
gap: ${theme.spacings.large};
`}
`;

export const GridElement = styled.div`
${({ theme }) => css`
overflow: hidden;
`}
`;

export const Image = styled.img`
${({ theme }) => css`
width: 1005;

&:hover {
  transform: scale(1.2) rotate(10deg);
}
`}
`;

