import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  // password Generator function
  const passGenerator = useCallback(() => {
    let pass=""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (char) str += "!@#$%^&*(){}~`-+"
    for (let i = 1; i <= length; i++) {
      let chr = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(chr)
    }
    setPassword(pass)
  }, [length, number, char, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select(password)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passGenerator()
  }, [length, number, char, passGenerator])

  return (
    <>
      <div class="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-white-500 bg-gray-800">
        <h2>PassWord Generator</h2>
        <div class="flex shadow rounded=lg overflow-hidden mb-4" >
          <input class="outline-none w-full py-1 px-3" type="text" value={password} placeholder='password' readOnly ref={passwordRef}
          />
          <button onClick={copyPassword} >Copy</button>
        </div>
        <div>
          <div>
            <input type="range" min={6} max={50} value={length} 
            onChange={(e) => {setLength(e.target.value)}}/> <label htmlFor="">Length : {length}</label>
          </div>
          <input type="checkbox" defaultChecked={number} id="numberInput" onChange={() => {setNumber((prev) => !prev);
          }} />
          <label htmlFor="">Numbers</label>
        </div>
        <div>
          <input type="checkbox" id="charInput" defaultChecked = {char} onChange={() => {setChar((prev) => !prev);
          }} />
          <label htmlFor="">Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
