import React, { useContext } from 'react'
import "./genre.scss"
import { mContext } from '../../MovieContext'
import Swal from 'sweetalert2'

function Genre() {

    const { movieMappingGenres, tvMappingGenres, selectedMovieGenres, selectedTvGenres, handleAddMovieGenre, handleAddTvGenre, setHasSelected, hasSelected} = useContext(mContext)

    const continueAndNavigate = () => {
        if(selectedMovieGenres.length === 0 || selectedTvGenres.length === 0){
            Swal.fire({
                text: "Select a couple of genres to procees",
                icon: "info",
                confirmButtonText: "Okay"
            })
        } else{
            setHasSelected(!hasSelected)
        }
    }

    return (
        <section className='genre-section'>
            <main className="genres-selection-cont">
                <article className="movie-genre">
                    <h1>Select Your Movie Genres</h1>
                    <div className="genres">
                        {
                            movieMappingGenres.map((genre, index) => (
                                <div onClick={() => handleAddMovieGenre(genre.id)} key={index}
                                    className={selectedMovieGenres.some((selected) => selected.id == genre.id) ? "selected genre" : "genre"}>
                                    <p>{genre.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </article>
                <article className="tv-shows-genre">
                    <h1>Select Your TV Show Genres</h1>
                    <div className="genres">
                        {
                            tvMappingGenres.map((genre, index) => (
                                <div onClick={() => handleAddTvGenre(genre.id)} key={index}
                                    className={selectedTvGenres.some((selected) => selected.id == genre.id) ? "selected genre" : "genre"}>
                                    <p>{genre.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </article>
            </main>
            <div className="overlay"></div>
            <button onClick={continueAndNavigate}>Continue</button>
        </section >
    )
}

export default Genre
