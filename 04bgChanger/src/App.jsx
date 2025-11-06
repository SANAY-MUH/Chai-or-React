import { useState } from 'react'

function App() {
  const [color, setColor] = useState("purple")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="bg-white py-3 px-2 flex justify-center flex-wrap shadow-lg gap-3 rounded-3xl">
            <button onClick={() => setColor("pink")} className='outline-none rounded-full py-2 px-3 shadow-lg' style={{backgroundColor: "pink"}}>pink</button>
            <button onClick={() => setColor("orange")} className='outline-none rounded-full py-2 px-3 shadow-lg' style={{backgroundColor: "orange"}}>orange</button>
            <button onClick={() => setColor("black")} className='outline-none rounded-full py-2 px-3 shadow-lg text-white' style={{backgroundColor: "black"}}>black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
