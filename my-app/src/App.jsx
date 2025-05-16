import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <h1>Inicio</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Buenas tardes
        </p>
      </div>
      <p className="read-the-docs">
        Probando Probando
      </p>
    </>
  )
}

export default App
