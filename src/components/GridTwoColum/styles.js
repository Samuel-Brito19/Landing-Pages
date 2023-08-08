import styled, { css } from 'styled-components'

export const Container = styled.div`
${({ theme }) => css`
display: grid;
grid-template-columns: 1fr 2fr;
align-items: center;
gap: ${theme.spacings.large};
`}
`;

export const TextContainer = styled.div`
${({ theme }) => css``}
`;

export const ImageContainer = styled.div`
${({ theme }) => css``}
`;

export const Image = styled.img`
${({ theme }) => css``}
`;
