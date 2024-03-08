import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import ServicePage from './components/ServicePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <ServicePage/>
      </>
  )
}

export default App
