import { BrowserRouter, Route, Routes } from "react-router-dom"
import Hero from "./components/hero/Hero"
import Genre from "./components/genreSelection/Genre"
import { MovieContext, mContext } from './MovieContext'
import { useContext } from "react"
import Suggestion from "./components/suggestion/Suggestion"


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

  const { setHasSelected, hasSelected, fetchedMoviesWithGenres } = useContext(mContext)

  return (
    <>
      {
        // !hasSelected ? <Genre /> : <Hero />
      }
      <Hero />
    </>
  )
}

export default App
