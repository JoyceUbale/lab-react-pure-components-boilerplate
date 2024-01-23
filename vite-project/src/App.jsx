import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleCounterComponent from './Components/SimpleCounterComponent'
import PureCounterComponent from './Components/PureCounterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SimpleCounterComponent/>
      <PureCounterComponent/>
    </>
  )
}

export default App
