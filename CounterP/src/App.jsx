import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter(counter+1)
  }
  const minusValue = () => {
    if(counter > 0) 
    setCounter(counter-1)
  }

  return (
    <>
      <h2>Increase Counter</h2>
      <h3>Counter Value {counter}</h3>
      <button onClick={addValue}>Add Count</button> 
      <br />
      <button onClick={minusValue}>Minus Count</button>
    </>
  )
}

export default App
