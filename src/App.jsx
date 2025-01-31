import { BrowserRouter, Route, Routes } from "react-router-dom"
import Hero from "./components/hero/Hero"
import Genre from "./components/genreSelection/Genre"
import { MovieContext, mContext } from './MovieContext'
import { useContext } from "react"
import Suggestion from "./components/suggestion/Suggestion"
import Page from "./components/page/Page"


function App() {
  return (
    <>
      <MovieContext>
        <BrowserRouter>
          { }
          <Routes>
            <Route path="/" element={<InnerComponent />} />
            <Route path="/movie/:id" element={<Page />} />
            <Route path="/show/:id" element={<Page />} />
          </Routes>
        </BrowserRouter>
      </MovieContext>
    </>
  )
}

function InnerComponent() {

  const  { hasSelected } = useContext(mContext)

  return (
    <>
      {
        hasSelected ?  <Hero /> : <Genre />
      }
    </>
  )
}

export default App
