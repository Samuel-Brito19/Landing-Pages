import styled, { css } from 'styled-components'
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as Heading } from '../Heading/styles';

export const Container = styled.div`
${({ theme }) => css`

position: fixed;
z-index: 5;
top: 0;
bottom: 0;
right: 0;
left: 0;
border-bottom: ${theme.colors.mediumGray};
background: ${theme.colors.white};

> ${SectionContainer} {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
  align-items: center;
  overflow-y: auto;
}

& ${Heading} {
  padding-bottom: ${theme.spacings.large};
  display: flex;
  justify-content: center;
}

@media ${theme.media.lteMedium} {
  height: 100vh;
}

`}
`;

export const MenuContainer = styled.div`
${({ theme }) => css`
display: flex;
justify-content: space-between;
align-items: center;

@media ${theme.media.lteMedium} {
  display: block;
  text-align: center;
  padding: ${theme.spacings.xxlarge} 0;
}

`}
`

export const Button = styled.div`
${({ theme }) => css`
z-index: 6;
position: fixed;
top: 2rem;
right: 2rem;
width: 4rem;
height: 4rem;
background: ${theme.colors.primaryColor};
color: ${theme.colors.white};
border: none;

`}

@media ${theme.media.lteMedium} {
  display: flex;
  align-items: center;
  justify-content: center;
}


> svg {
  width: 2.5rem;
  height: 2.5rem
}
`
