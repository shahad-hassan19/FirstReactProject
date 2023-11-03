import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter+1);
  }

  const removeValue = () => {
    setCounter(counter-1);
  }

  return (
    <>
    <h1>Count is {counter}.</h1>
    <button onClick={addValue} className='Btn'>
      Add
    </button>
    <button onClick={removeValue} className='Btn'>
      Subtract
    </button>
    </>
  )
}

export default App
