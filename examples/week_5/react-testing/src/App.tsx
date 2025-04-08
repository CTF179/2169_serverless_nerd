import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter/Counter'
import Greeting from './Components/Greeting/Greeting'
import Async from './Components/Async/Async'

function App() {

  return (
    <>
      <Counter/>
      <Greeting/>
      <Async/>
    </>
  )
}

export default App
