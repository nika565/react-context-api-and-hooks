import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './templates/home'
import './styles/global-styles.css'
import { CounterContextProvider } from './contexts/CounterContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterContextProvider>
      <Home />
    </CounterContextProvider>
  </React.StrictMode>,
)
