import React from 'react'
import { hydrate, render } from 'react-dom'
import '@babel/polyfill'
import { App } from './App'
import ErrorBoundary from './ErrorBoundary'
import './assets/styles/main.css'

const root = document.getElementById('root')
var renderMethod
if (root && root.innerHTML !== '') {
  renderMethod = hydrate
} else {
  renderMethod = render
}

renderMethod(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  root
)
