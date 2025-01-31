import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { mContext } from '../../MovieContext'
import { Link } from 'react-router-dom'
import "./page.scss"

function Page() {

    const { fetchedMoviesWithGenres, fetchedShowsWithGenres } = useContext(mContext)
    const itemType = window.location.pathname.split('/')[1]
    const id = useParams();
    const [showItem, setShowItem] = useState([])
    const [movieItem, setMovieItem] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const SearchForItem = () => {
        if (itemType == "show") {
            const show = fetchedShowsWithGenres.filter(show => {
                return show.show.ids.trakt == id.id
            })
            setShowItem(show)
            setIsLoading(false)
            console.log(showItem)
        } else {
            const movie = fetchedMoviesWithGenres.filter(movie => {
                return movie.movie.ids.trakt == id.id
            })
            setMovieItem(movie)
            setIsLoading(false)
            console.log(movieItem)
        }

    }

    useEffect(() => {
        SearchForItem()
    }, [, fetchedMoviesWithGenres, fetchedShowsWithGenres])

    return (
        <section className='item-page-section'>
            {
                isLoading ? <p>Loading...</p> :

                    movieItem ?
                        <figure className='poster' style={{
                            backgroundImage: `url(
                                        ${movieItem[0]?.movie?.images?.clearart?.[0] ?
                                    `https://${movieItem[0]?.movie?.images.clearart[0]}` :
                                    `https://${movieItem[0]?.movie?.images.thumb[0]}` ?
                                        `https://${movieItem[0]?.movie?.images.thum[0]}` :
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
                        <p>shows</p>
            }
        </section>
    )
}

export default Page
