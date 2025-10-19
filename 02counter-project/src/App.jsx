import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  const addValue = () => {
    counter = counter + 1;
    
    if(counter > 20){
      counter = 20;
      setCounter(counter);
      alert("Counter value cannot exceed 20");
    }
    else{
      setCounter(counter);
    }
  }

  const decreaseValue = () => {
    counter = counter - 1;
    setCounter(counter);
    
    if(counter < 0){
      counter = 0;
      setCounter(counter);
      alert("Counter value cannot be less than 0");
    }
    else{
      setCounter(counter);
    }
  }
  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
