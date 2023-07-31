import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import Home from './templates/App/App.jsx'
import { GlobalStyles } from './templates/styles/globalStyles'
import { theme } from './templates/styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>

  </React.StrictMode>,
)
