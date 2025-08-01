import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 class="text-blue-600 dark:text-sky-400">Tailwind CSS</h2>
      <Card />
    </>
  )
}

export default App
