import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { GlobalStyles } from './style/globalStyles'
import { ThemeProvider } from 'styled-components'
import { theme } from './style/theme.js'
import styled, { css } from 'styled-components'
import { Heading } from './components/Heading/index.jsx'
import Home from './App'

const changeBackground = (bg) => css`
background: ${bg};
`

export const Container = styled.div`

background: ${({ theme }) => theme.colors.secondaryBg};

${({ theme }) => css`
${changeBackground(theme)}

`}

`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Container bg="red">
        <Heading>
          <Home />
        </Heading>
      </Container>
    </ThemeProvider>
    <GlobalStyles />
  </React.StrictMode>,
)
