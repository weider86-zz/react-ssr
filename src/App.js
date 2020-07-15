import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello world!</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
};

export default App;
