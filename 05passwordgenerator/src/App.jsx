import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [useNum, setuseNum] = useState(false)
  const [useChar, setuseChar] = useState(false)
  const [password, setpassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (useNum) str += "0123456789";
    if (useChar) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setpassword(pass);

  }, [length, useNum, useChar, setpassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 8);
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    generatePassword();
  }, [length, useNum, useChar, generatePassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-gray-500 bg-gray-700'>
        <h1 className='text-2xl font-bold text-white text-center py-4'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-1'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3 bg-white mb-1' placeholder='Password' readOnly
            ref={passwordRef} />

          <button onClick={copyPasswordToClipboard} className='outline-none bg-pink-700 px-3 py-0.5 shrink-0 text-black mb-1'>copy</button>

        </div>

        <div className='flex text-sm gap-x-2  text-white '>
          <div className='flex items-center gap-x-1 mb-3'>

            <input type="range" min={6} max={100}
              value={length} className='cursor-pointer' onChange={(e) => setlength(e.target.value)} />
              
            <label> Length: {length}</label>

          </div>

          <div className='flex items-center gap-x-1  text-white mb-3'>

            <input type="checkbox" defaultChecked={useNum} id='numberInput' onChange={() => {
              setuseNum((prev) => !prev);
            }} />

            <label htmlFor="numberInput">Numbers</label>

          </div>

          <div className='flex items-center gap-x-1 text-white mb-3'>

            <input type="checkbox" defaultChecked={useChar} id='CharacterInput' onChange={() => setuseChar((prev) => !prev)} />

            <label htmlFor="characterInput">Characters</label>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
