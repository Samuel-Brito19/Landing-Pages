import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import Home from './templates/App/App.jsx'
import { GlobalStyles } from './templates/styles/globalStyles'
import { theme } from './templates/styles/theme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Home />
      <GlobalStyles />
    </ThemeProvider>

  </React.StrictMode>,
)
