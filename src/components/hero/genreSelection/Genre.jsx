import React, { useEffect, useState } from 'react'
import "./genre.scss"
import Swal from "sweetalert2"

function Genre() {

    const movieMappingGenres = [
        { id: 28, name: "Action" },
        { id: 12, name: "Adventure" },
        { id: 16, name: "Animation" },
        { id: 35, name: "Comedy" },
        { id: 80, name: "Crime" },
        { id: 99, name: "Documentary" },
        { id: 18, name: "Drama" },
        { id: 10751, name: "Family" },
        { id: 14, name: "Fantasy" },
        { id: 36, name: "History" },
        { id: 27, name: "Horror" },
        { id: 10402, name: "Music" },
        { id: 9648, name: "Mystery" },
        { id: 10749, name: "Romance" },
        { id: 878, name: "Science Fiction" },
        { id: 21, name: "War" },
        { id: 37, name: "Western" }
    ];

    const tvMappingGenres = [
        { id: 10759, name: "Action & Adventure" },
        { id: 16, name: "Animation" },
        { id: 35, name: "Comedy" },
        { id: 80, name: "Crime" },
        { id: 99, name: "Documentary" },
        { id: 18, name: "Drama" },
        { id: 10751, name: "Family" },
        { id: 10762, name: "Kids" },
        { id: 9648, name: "Mystery" },
        { id: 10763, name: "News" },
        { id: 10764, name: "Reality" },
        { id: 10765, name: "Sci-Fi & Fantasy" },
        { id: 10766, name: "Soap" },
        { id: 10767, name: "Talk" },
        { id: 10768, name: "War & Politics" },
        { id: 37, name: "Western" }
    ];

    const [movieGenres, setMovieGenres] = useState([
        { id: 28, name: "Action" },
        { id: 12, name: "Adventure" },
        { id: 16, name: "Animation" },
        { id: 35, name: "Comedy" },
        { id: 80, name: "Crime" },
        { id: 99, name: "Documentary" },
        { id: 18, name: "Drama" },
        { id: 10751, name: "Family" },
        { id: 14, name: "Fantasy" },
        { id: 36, name: "History" },
        { id: 27, name: "Horror" },
        { id: 10402, name: "Music" },
        { id: 9648, name: "Mystery" },
        { id: 10749, name: "Romance" },
        { id: 878, name: "Science Fiction" },
        { id: 21, name: "War" },
        { id: 37, name: "Western" }
    ]);

    const [tvGenres, setTvGenres] = useState([
        { id: 10759, name: "Action & Adventure" },
        { id: 16, name: "Animation" },
        { id: 35, name: "Comedy" },
        { id: 80, name: "Crime" },
        { id: 99, name: "Documentary" },
        { id: 18, name: "Drama" },
        { id: 10751, name: "Family" },
        { id: 10762, name: "Kids" },
        { id: 9648, name: "Mystery" },
        { id: 10763, name: "News" },
        { id: 10764, name: "Reality" },
        { id: 10765, name: "Sci-Fi & Fantasy" },
        { id: 10766, name: "Soap" },
        { id: 10767, name: "Talk" },
        { id: 10768, name: "War & Politics" },
        { id: 37, name: "Western" }
    ]);

    const [selectedMovieGenres, setSelectedMovieGenres] = useState([])
    const [selectedTvGenres, setSelectedTvGenres] = useState([])

    const handleAddMovieGenre = (genreId) => {
        const isDuplicate = selectedMovieGenres.filter(genre => genre.id == genreId)

        //check if no duplicate found
        if (isDuplicate.length == 0) {
            if (selectedMovieGenres.length < 3) {
                //add to selectedMovieGenres 
                const addToSelected = movieGenres.filter(movie => (movie.id == genreId))
                setSelectedMovieGenres(prev => [...prev, ...addToSelected])
                //remove from movieGenres
                const filteredMoviesGenre = movieGenres.filter(movie => (movie.id !== genreId))
                setMovieGenres(filteredMoviesGenre)
            }
            else {
                Swal.fire({
                    // title: 'Responsive Alert!',
                    text: 'Max limit reached, can not select more movie genres',
                    icon: 'warning',
                    confirmButtonText: 'Okay',
                })
            }
        }
        else {
            // if a duplicate was found
            //remove it from the selectedMovieGenres
            const filteredSelected = selectedMovieGenres.filter(genre => genre.id !== genreId)
            setSelectedMovieGenres(filteredSelected)
            //add it to moviesGenre
            const addToMovies = selectedMovieGenres.filter(genre => genre.id == genreId)
            setMovieGenres(prev => [...prev, ...addToMovies])
        }
    }

    const handleAddTvGenre = (genreId) => {
        const isDuplicate = selectedTvGenres.filter(genre => genre.id == genreId)

        //check if no duplicate found
        if (isDuplicate.length == 0) {
            if (selectedTvGenres.length < 3) {
                //add to selectedTvGenres 
                const addToSelected = tvGenres.filter(movie => (movie.id == genreId))
                setSelectedTvGenres(prev => [...prev, ...addToSelected])
                //remove from tvGenres
                const filteredTvGenre = tvGenres.filter(movie => (movie.id !== genreId))
                setTvGenres(filteredTvGenre)
            }
            else {
                Swal.fire({
                    // title: 'Responsive Alert!',
                    text: 'Max limit reached, can not select more tv show genres',
                    icon: 'warning',
                    confirmButtonText: 'Okay',
                })
            }
        }
        else {
            // if a duplicate was found
            //remove it from the selectedTvGenres
            const filteredSelected = selectedTvGenres.filter(genre => genre.id !== genreId)
            setSelectedTvGenres(filteredSelected)
            //add it to tvGenre
            const addToTv = selectedTvGenres.filter(genre => genre.id == genreId)
            setTvGenres(prev => [...prev, ...addToTv])
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
                    <h1>Select Your Movie Genres</h1>
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
        </section >
    )
}

export default Genre
