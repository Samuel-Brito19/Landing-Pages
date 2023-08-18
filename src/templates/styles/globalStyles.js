import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,900;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.family.secondary};
  }

  p {
    margin: ${({ theme }) => theme.spacings.large} 0;
  }

  ul,ol {
    margin: ${({ theme }) => theme.spacings.large};
    padding: ${({ theme }) => theme.spacings.large};
  }

  a {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

  .table {
    width: 100%;
    overflow-y: auto;
  }
`;
