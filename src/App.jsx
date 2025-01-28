import { BrowserRouter, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import Genre from "./components/hero/genreSelection/Genre"

function App() {

  return (
    <>
      <BrowserRouter>
        <Hero />
        <Genre />
        <Routes>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
