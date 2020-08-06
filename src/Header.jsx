import React, { useState, useEffect } from '../node_modules/react'
import logo from './assets/images/logo.png'
import './assets/styles/header.css'

export const Header = () => {
  const [now] = useState(new Date().getTime())
  const [headerTitle, setHeaderTitle] = useState('...')

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeaderTitle('Header Title')
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="header">
      <img width={50} src={logo} alt="Mercado Livre" />
      <h1>
        {headerTitle} <span>{now}</span>
      </h1>
      <ul>
        <li>
          <a href="">Link</a>
        </li>
        <li>
          <a href="">Link2</a>
        </li>
        <li>
          <a href="">Link3</a>
        </li>
      </ul>
    </div>
  )
}
