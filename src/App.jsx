import { useState } from 'react'
import './App.css'


import Accordian from './components/Accordian'
import RandomColor from './components/random-color-generator'
import StarRating from './components/star-rating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Accordian Feature */}
     {/* <Accordian /> */}

     {/* Generating random color feature */}
     {/* <RandomColor /> */}

     {/* Star rating component */}
     <StarRating />
    </>
  )
}

export default App
