import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

//In JS we create and use objects like this

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     childern: 'Click me to go to Google'
// }

//In React we create and use Objects like this

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to go to Google'
)

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

createRoot(document.getElementById('root')).render(
  
    <App />
  
)
