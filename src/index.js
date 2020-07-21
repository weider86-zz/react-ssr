import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import { App } from './App'
import ErrorBoundary from './ErrorBoundary'
import './styles.css'

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
)
