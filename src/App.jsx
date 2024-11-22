import { useState } from 'react'
import './App.css'


import Accordian from './components/Accordian'
import RandomColor from './components/random-color-generator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Accordian Feature */}
     {/* <Accordian /> */}

     {/* Generating random color feature */}
     <RandomColor />
    </>
  )
}

export default App
