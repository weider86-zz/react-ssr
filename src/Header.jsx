import React, { useState, useEffect } from '../node_modules/react'

export const Header = () => {
  const [headerTitle, setHeaderTitle] = useState('...')

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeaderTitle('Header Title')
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <h1>{headerTitle}</h1>
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
      <hr />
    </div>
  )
}
