import { BrowserRouter, Route, Routes } from "react-router-dom"
import Hero from "./components/hero/Hero"
import Genre from "./components/hero/genreSelection/Genre"
import { MovieContext, mContext } from './MovieContext'
import { useContext } from "react"


function App() {
  return (
    <>
      <MovieContext>
        <BrowserRouter>
          { }
          <Routes>
            <Route path="/" element={<InnerComponent />} />
          </Routes>
        </BrowserRouter>
      </MovieContext>
    </>
  )
}

function InnerComponent() {

  const { setHasSelected, hasSelected } = useContext(mContext)

  return (
    <>
      {
      !hasSelected ? <Genre /> : <Hero />
      }
    </>
  )
}

export default App
