import React from 'react';
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2 data-testid="title">Hello World</h2>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>increase</button>
      </div>
    </>
  )
}

export default App
