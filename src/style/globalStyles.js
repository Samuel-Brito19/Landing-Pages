import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500&family=Montserrat:wght@900&family=Open+Sans:ital,wght@0,300;1,300&family=Poppins:wght@100;200;300;400;500&display=swap');

* {
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 2.4rem;
  font-family: 'Montserrat', sans-serif;
}
`
