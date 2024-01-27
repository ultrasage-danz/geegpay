import { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar'
import Container from './components/Container'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    {/* Side bar */}
    

    {/* Container */}
      <main className="flex flex-row">
        <SideBar />
        <Container />
        
        
      </main>
    </>
  )
}

export default App
