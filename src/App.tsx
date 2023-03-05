import { useState } from 'react'
import ReactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ReactLogo />
    </>
  )
}

export default App
