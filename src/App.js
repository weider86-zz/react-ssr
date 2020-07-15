import React, { useState, lazy, Suspense } from 'react'

const Warning = lazy(async () => ({
  default: (await import(/* webpackChunkName: "other" */ './Warning')).Warning,
}))

export const App = () => {
  const [count, setCount] = useState(0)

  const loading = () => <p>Loading...</p>

  return (
    <>
      <h1>Hello world</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>

      {count > 10 && (
        <Suspense fallback={loading}>
          <Warning />
        </Suspense>
      )}
    </>
  )
}
