import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { mContext } from '../../MovieContext'
import { Link } from 'react-router-dom'
import "./page.scss"
import Navbar from '../navbar/Navbar'

function Page() {

    const { fetchedMoviesWithGenres, fetchedShowsWithGenres } = useContext(mContext)
    const itemType = window.location.pathname.split('/')[1]
    const id = useParams();
    const [showItem, setShowItem] = useState()
    const [movieItem, setMovieItem] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const navigateHome = useNavigate();

    const SearchForItem = () => {
        if (fetchedMoviesWithGenres.length === 0 || fetchedShowsWithGenres.length === 0) {
            navigateHome("/")
        } else{
            if (itemType == "show") {
                const show = fetchedShowsWithGenres.filter(show => (
                    show.show.ids.trakt == id.id
                ))
                setShowItem(show)
                setIsLoading(false)
            } else {
                const movie = fetchedMoviesWithGenres.filter(movie => (
                    movie.movie.ids.trakt == id.id
                ))
                setMovieItem(movie)
                setIsLoading(false)
            }
        }

    }

    useEffect(() => {
        SearchForItem()
    }, [, fetchedMoviesWithGenres, fetchedShowsWithGenres])

    return (
        <section className='item-page-section'>
            <Navbar />
            {
                isLoading ? <p>Loading...</p> :

                    movieItem ?
                        <figure className='poster' style={{
                            backgroundImage: `url(
                                        ${movieItem[0]?.movie?.images?.clearart?.[0] ?
                                    `https://${movieItem[0]?.movie?.images.clearart[0]}` :
                                    `https://${movieItem[0]?.movie?.images.thumb[0]}` ?
                                        `https://${movieItem[0]?.movie?.images.thumb[0]}` :
                                        "/default.jpeg"
                                })`
                        }}>
                            <div className='movie-info'>
                                <h1>{movieItem[0]?.movie?.title}</h1>
                                <span className="rating-cont">
                                    <img src="/imdb.png" alt="" />
                                    <p>{movieItem[0]?.movie?.rating ? `${movieItem[0].movie.rating.toFixed(1)}` : "na"}</p>
                                </span>
                                <p>{movieItem[0]?.movie?.overview}</p>
                                <Link className='trailer-link' to={movieItem[0]?.movie?.trailer ? `${movieItem[0].movie.trailer}` : ""} target='_blank'>
                                    <button className='trailer-btn'>
                                        <img src="/trailer.png" alt="" />
                                        Watch trailer
                                    </button>
                                </Link>

                            </div>
                            <div className="overlay"></div>
                        </figure>
                        :
                        showItem.length !== 0 &&
                        <figure className='poster' style={{
                            backgroundImage: `url(
                                        ${showItem[0]?.show.images.clearart[0] ?
                                    `https://${showItem[0].show.images.clearart[0]}` :
                                    `https://${showItem[0].show.images.thumb[0]}` ?
                                        `https://${showItem[0].show.images.thumb[0]}` :
                                        "/default.jpeg"
                                })`
                        }}>
                            <div className='movie-info'>
                                <h1>{showItem[0].show?.title ? showItem[0].show.title : ""}</h1>
                                <span className="rating-cont">
                                    <img src="/imdb.png" alt="" />
                                    <p>{showItem[0]?.show?.rating ? `${showItem[0].show.rating.toFixed(1)}` : "na"}</p>
                                </span>
                                <p>{showItem[0]?.show?.overview}</p>
                                <Link className='trailer-link' to={showItem[0]?.show?.trailer ? `${showItem[0].show.trailer}` : ""} target='_blank'>
                                    <button className='trailer-btn'>
                                        <img src="/trailer.png" alt="" />
                                        Watch trailer
                                    </button>
                                </Link>
                            </div>
                            <div className="overlay"></div>
                        </figure>
            }
        </section>
    )
}

export default Page
