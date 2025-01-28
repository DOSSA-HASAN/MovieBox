import React, { useEffect, useState } from 'react'
import "./genre.scss"

function Genre() {

    const mappingGenres = [
        { id: 1, name: "Action" },
        { id: 2, name: "Adventure" },
        { id: 3, name: "Animation" },
        { id: 4, name: "Biography" },
        { id: 5, name: "Comedy" },
        { id: 6, name: "Crime" },
        { id: 7, name: "Documentary" },
        { id: 8, name: "Drama" },
        { id: 9, name: "Family" },
        { id: 10, name: "Fantasy" },
        { id: 11, name: "History" },
        { id: 12, name: "Horror" },
        { id: 13, name: "Music" },
        { id: 14, name: "Musical" },
        { id: 15, name: "Mystery" },
        { id: 16, name: "Romance" },
        { id: 17, name: "Science Fiction" },
        { id: 18, name: "Sports" },
        { id: 19, name: "Superhero" },
        { id: 20, name: "Thriller" },
        { id: 21, name: "War" },
        { id: 22, name: "Western" }
    ];

    const [movieGenres, setMovieGenres] = useState([
        { id: 1, name: "Action" },
        { id: 2, name: "Adventure" },
        { id: 3, name: "Animation" },
        { id: 4, name: "Biography" },
        { id: 5, name: "Comedy" },
        { id: 6, name: "Crime" },
        { id: 7, name: "Documentary" },
        { id: 8, name: "Drama" },
        { id: 9, name: "Family" },
        { id: 10, name: "Fantasy" },
        { id: 11, name: "History" },
        { id: 12, name: "Horror" },
        { id: 13, name: "Music" },
        { id: 14, name: "Musical" },
        { id: 15, name: "Mystery" },
        { id: 16, name: "Romance" },
        { id: 17, name: "Science Fiction" },
        { id: 18, name: "Sports" },
        { id: 19, name: "Superhero" },
        { id: 20, name: "Thriller" },
        { id: 21, name: "War" },
        { id: 22, name: "Western" }
    ]);

    const [selectedGenres, setSelectedGenres] = useState([])

    const handleAddGenre = (genreId) => {
        const isDuplicate = selectedGenres.filter(genre => genre.id == genreId)

        //check if no duplicate found
        if(isDuplicate.length == 0){
            //add to selectedGenres 
            const addToSelected = movieGenres.filter(movie => (movie.id == genreId))
            setSelectedGenres(prev => [...prev, ...addToSelected])
            //remove from movieGenres
            const filteredMoviesGenre = movieGenres.filter(movie => (movie.id !== genreId))
            setMovieGenres(filteredMoviesGenre)
        } 
        else{
            // if a duplicate was found
            //remove it from the selectedGenres
            const filteredSelected = selectedGenres.filter(genre => genre.id !== genreId)
            setSelectedGenres(filteredSelected)
            //add it to moviesGenre
            const addToMovies = selectedGenres.filter(genre =>  genre.id == genreId)
            setMovieGenres(prev => [...prev, ...addToMovies])
        }

    }

        console.log("movie genre",movieGenres)
        console.log("selected genres" , selectedGenres)


    return (
        <section className='genre-section'>
            <h1>Select Your Genres</h1>
            <main className="genres-selection-cont">
                {
                    mappingGenres.map((genre, index) => (
                        <div onClick={() => handleAddGenre(genre.id)} key={index} className="genre">
                            <p>{genre.name}</p>
                        </div>
                    ))
                }
            </main>
        </section>
    )
}

export default Genre
