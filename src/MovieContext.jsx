import React, { createContext, useEffect, useState } from 'react'
import Swal from "sweetalert2"
import { CLIENT_ID_TRAKT } from "../key"

const mContext = createContext()

function MovieContext({ children }) {

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

    const [hasSelected, setHasSelected] = useState(false)


    //used for the banner in Hero.jsx
    const [movies, setMovies] = useState([])

    const fetchTrendingMovies = async () => {
        const response = await fetch(
            "https://api.trakt.tv/movies/trending?extended=full,images",
            {
                headers: {
                    "Content-Type": "application/json",
                    "trakt-api-version": "2",
                    "trakt-api-key": CLIENT_ID_TRAKT
                }
            }
        );

        const data = await response.json();
        console.log(data)
        console.log(Date.now())
        setMovies(data)

    };

    //genres params used in 'fetchMoviesWithGenres' funtion below

    const [page, setPage] = useState(1)

    //array of movies suggested for users based on their selected genres
    const [fetchedMoviesWithGenres, setFetchedMoviesWithGenres] = useState([])

    const genreParams = new URLSearchParams({
        genres: "action",
        extended: "full,images",
        page: page,
        limit: 20
    })

    const fetchMoviesWithGenres = async () => {

        if (selectedMovieGenres) {
            const response = await fetch(
                `https://api.trakt.tv/movies/trending?&${genreParams}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "trakt-api-version": "2",
                        "trakt-api-key": CLIENT_ID_TRAKT
                    }
                }
            )
            const data = await response.json()
            console.log("with genres",data)
            setFetchedMoviesWithGenres(prev => [...prev, ...data])
            setPage(prev => (prev + 1))
        }
    }

    //called on startup of application
    useEffect(() => {
        fetchTrendingMovies();
        fetchMoviesWithGenres()
    }, [])



    return (
        <mContext.Provider value={{ movieMappingGenres, tvMappingGenres, movieGenres, setMovieGenres, tvGenres, setTvGenres, selectedMovieGenres, setSelectedMovieGenres, selectedTvGenres, setSelectedTvGenres, handleAddMovieGenre, handleAddTvGenre, hasSelected, setHasSelected, movies, fetchedMoviesWithGenres }}>
            {children}
        </mContext.Provider>
    )
}

export { MovieContext, mContext }
