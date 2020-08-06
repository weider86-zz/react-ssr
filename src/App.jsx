import React, { useState, lazy, Suspense } from '../node_modules/react'
import { Header } from './Header'
import { Button } from './Button'

const Warning = lazy(async () => ({
  default: (await import(/* webpackChunkName: "other" */ './Warning')).Warning,
}))

export const App = () => {
  const [count, setCount] = useState(10)

  const loading = () => <p>Loading...</p>

  return (
    <>
      <Header />
      <h2>Count: {count}</h2>
      <Button onClick={() => setCount(count + 1)}>+ 💅</Button>
      <Button onClick={() => setCount(count - 1)}>- 💅</Button>

      {count > 10 && (
        <Suspense fallback={loading}>
          <Warning />
        </Suspense>
      )}
    </>
  )
}
