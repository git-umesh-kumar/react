import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("Yellow")

  return (
    <div class="w-screen h-screen duration-200"
    style={{background: color}}
    > <h1 class="text-white">Back Ground Color Changer</h1>
      <div class="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div class="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
          <button onClick={() => setColor("Red")}
            class="outline-none px-4 py-1 rounded-full text-white shadow=lg" style={{background: "Red"}}>
            Red</button>
          <button onClick={() => setColor("Blue")}
            class="outline-none px-4 py-1 rounded-full text-white shadow=lg" style={{background: "Blue"}}>
            Blue</button>
            <button onClick={() => setColor("Green")}
            class="outline-none px-4 py-1 rounded-full text-white shadow=lg" style={{background: "Green"}}>
            Green</button>
        </div>
      </div>
    </div>
  )
}

export default App
