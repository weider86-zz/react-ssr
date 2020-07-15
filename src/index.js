import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import { App } from './App'
import ErrorBoundary from './ErrorBoundary'
import './styles.css'

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
)
