import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Sanay",
    age: 21
  }

  return (
    <>
      <Card username = "Sanay" serial = "#313"/>
      <Card username = "Muhammad" serial = "#369"/>
    </>
  )
}

export default App
