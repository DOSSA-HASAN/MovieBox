import React, { useContext, useEffect, useRef, useState } from 'react'
import { mContext } from '../../MovieContext'
import "./suggestion.scss"
import { Link } from 'react-router-dom'

function Suggestion({ data, type }) {

    const { fetchShowsWithGenres, fetchMoviesWithGenres } = useContext(mContext)

    const [showMoreShows, setShowMoreShows] = useState(false)
    const [showMoreMovies, setShowMoreMovies] = useState(false)

    let number = data.length;
    const [currentCount, setCurrentCount] = useState(0)

    const handleRight = () => {
        if (currentCount < number && ((currentCount * 200) < ((number * 200) - 800))) {
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

    const scrollRef = useRef(null)
    const handleScroll = () => {
        const element = scrollRef.current;
        if (element) {
            //scrolltop = how much has been scrolled
            //client height = visible height of the element (in our case 500)
            //scrollHeight = total scrollable height
            const { scrollTop, scrollHeight, clientHeight } = element

            if (scrollTop + clientHeight >= scrollHeight - 1) {
                if (type == "movie") {
                    fetchMoviesWithGenres()
                }
                if (type == "show") {
                    fetchShowsWithGenres()
                }
            }

        }
    }

    return (
        <section className='suggestion-section'>
            {
                type == "show" ?
                    <main className="suggestion-cont">
                        <header>
                            <h2>Suggested Shows</h2>
                            <p onClick={() => setShowMoreShows(!showMoreShows)}>See more &gt;</p>
                            <button className={showMoreShows ? 'display-none' : 'left-btn'} onClick={() => handleLeft()}><p>&lt;</p></button>
                            <button className={showMoreShows ? 'display-none' : 'right-btn'} onClick={() => handleRight()}><p>&gt;</p></button>
                        </header>
                        {
                            <figure ref={scrollRef} onScroll={handleScroll} className={showMoreShows ? "suggestions-slider show-more" : "suggestions-slider"}>
                                {data && data.map((show, index) => (
                                    <Link to={`/show/${show.show.ids.trakt}`}>
                                        <div key={index} className="suggested-movie" style={{ transform: `translateX(-${currentCount * 200}px)` }}>
                                            <img src={show?.show?.images?.poster?.[0] ? `https://${show.show.images.poster[0]}` : "/fallback-image.jpg"} alt="Show Poster" />
                                            <p className='country-released'>{show?.show?.country?.toUpperCase()} {show?.show?.year}</p>
                                            <p className='title'>{show?.show?.title}</p>
                                            <p className='network'>Produced By {show?.show?.network}</p>
                                            <p className='episode-count'>Episodes {show?.show?.aired_episodes}</p>
                                            <span className="rating">
                                                <img src="/imdb.png" alt="IMDb Rating" />
                                                <p>{show?.show?.rating ? show.show.rating.toFixed(1) : "N/A"}</p>
                                            </span>
                                            <div className='genres-list'>
                                                <p>{show?.show?.genres?.toString() || "Unknown Genre"}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </figure>
                        }
                    </main >
                    :
                    <main className="suggestion-cont">
                        <header>
                            <h2>Suggested Movies</h2>
                            <p onClick={() => setShowMoreMovies(!showMoreMovies)}>See more &gt;</p>
                            <button className={showMoreMovies ? 'display-none' : 'left-btn'} onClick={() => handleLeft()}><p>&lt;</p></button>
                            <button className={showMoreMovies ? 'display-none' : 'right-btn'} onClick={() => handleRight()}><p>&gt;</p></button>
                        </header>
                        {
                            <figure ref={scrollRef} onScroll={handleScroll} className={showMoreMovies ? "suggestions-slider show-more" : "suggestions-slider"}>
                                {data && data.map((movie, index) => (
                                    <Link to={`/movie/${movie.movie.ids.trakt}`}>
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
                                    </Link>
                                ))}
                    </figure>
            }
        </main >
            }
        </section >
    )
}

export default Suggestion
