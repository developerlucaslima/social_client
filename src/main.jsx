import React from 'react'
import ReactDOM from 'react-dom/client'


import GlobalStyles, { darkTheme } from './styles/global'
import { ThemeProvider } from 'styled-components'

import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ darkTheme }>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
)
