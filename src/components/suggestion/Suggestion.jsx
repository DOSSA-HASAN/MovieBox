import React, { useContext, useEffect, useState } from 'react'
import { mContext } from '../../movieContext'
import "./suggestion.scss"

function Suggestion({ data }) {


    const [isMovie, setIsMovie] = useState(false)


    // const checkIsMovieOrShow = () => {
    //     if (data && data.length !== 0 && data[0].show) {
    //         setIsMovie(false)
    //     } else {
    //         setIsMovie(true)
    //     }
    // }

    // useEffect(() => {
    //     checkIsMovieOrShow()
    // }, [])

    let number = data.length;
    const [currentCount, setCurrentCount] = useState(0)

    const handleRight = () => {
        if (currentCount < number) {
            setCurrentCount(prev => prev + 1)
            console.log("number", number)
            console.log("current count", currentCount)
            console.log("moved by", currentCount * 200)
        }
    }

    const handleLeft = () => {
        if (currentCount >= 0) {
            setCurrentCount(prev => prev - 1)
        }
    }

    return (
        <section className='suggestion-section'>
            {
                isMovie ?

                    <main className="suggestion-cont">
                        {/* <header>
                            <h2>Suggested Movies</h2>
                            <p>See more &gt;</p>
                            <button className='left-btn' onClick={() => handleLeft()}><p>&lt;</p></button>
                            <button className='right-btn' onClick={() => handleRight()}><p>&gt;</p></button>
                        </header>
                        {
                            <figure className="suggestions-slider">
                                {data && data.map((movie, index) => (
                                    <div key={index} className="suggested-movie" style={{ transform: `translateX(-${currentCount * 200}px)` }}>
                                        <img src={movie?.movie?.images?.poster?.[0] ? `https://${movie.movie.images.poster[0]}` : "/fallback-image.jpg"} alt="Movie Poster" />
                                        <p className='country-released'>{movie?.movie?.country?.toUpperCase()} {movie?.movie?.year}</p>
                                        <p className='title'>{movie?.movie?.title}</p>
                                        <span className="rating">
                                            <img src="/imdb.png" alt="IMDb Rating" />
                                            <p>{movie?.movie?.rating ? movie.movie.rating.toFixed(1) : "N/A"}</p>
                                        </span>
                                        <div className='genres-list'>
                                            <p>{movie?.movie?.genres?.toString() || "Unknown Genre"}</p>
                                        </div>
                                    </div>
                                ))}

                            </figure> */}
                        {/* } */}
                    </main>
                    :
                    <main className="suggestion-cont">
                        <header>
                            <h2>Suggested Tv Shows</h2>
                            <p>See more &gt;</p>
                            <button className='left-btn' onClick={() => handleLeft()}><p>&lt;</p></button>
                            <button className='right-btn' onClick={() => handleRight()}><p>&gt;</p></button>
                        </header>
                        {
                            <figure className="suggestions-slider">
                                {data && data.map((show, index) => (
                                    <div key={index} className="suggested-movie" style={{ transform: `translateX(-${currentCount * 200}px)` }}>
                                        <img src={show?.show?.images?.poster?.[0] ? `https://${show.show.images.poster[0]}` : "/fallback-image.jpg"} alt="Show Poster" />
                                        <p className='country-released'>{show?.show?.country?.toUpperCase() || "Unknown"} {show?.show?.year || "N/A"}</p>
                                        <p className='title'>{show?.show?.title || "Untitled"}</p>
                                        <span className="rating">
                                            <img src="/imdb.png" alt="IMDb Rating" />
                                            <p>{show?.show?.rating ? show.show.rating.toFixed(1) : "N/A"}</p>
                                        </span>
                                        <div className='genres-list'>
                                            <p>{show?.show?.genres?.toString() || "Unknown Genre"}</p>
                                        </div>
                                    </div>
                                ))}

                            </figure>
                        }
                    </main>
            }
        </section>
    )
}

export default Suggestion
