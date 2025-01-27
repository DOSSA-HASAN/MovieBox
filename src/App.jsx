import { BrowserRouter, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"

function App() {

  return (
    <>
      <BrowserRouter>
        <Hero />
        <Routes>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
