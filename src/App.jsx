import { useState } from 'react'
import './App.css'
import Home from "./pages/Home"

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='container mx-auto main-layout'>
        <Home />
    </div>
  )
}

export default App
