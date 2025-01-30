import React, { useContext, useEffect, useState } from 'react'
import "./hero.scss"
import Navbar from "../navbar/Navbar"
import Footer from '../footer/Footer'
import { mContext } from '../../MovieContext'
import { Link } from "react-router-dom"

function Hero() {

    const { movies } = useContext(mContext)
    // console.log(movies)

    const [posterNum, setPosterNum] = useState(0)

    // auto-scroll function
    useEffect(() => {
        const interval = setInterval(() => {
            setPosterNum(prev => (prev + 1) % movies.length)
        }, 5000);

        return () => clearInterval(interval)

    }, [movies.length])


    return (
        <>
            <section className='hero-section'>
                <main className="slider-cont">
                    <Navbar />
                    {
                        movies.map((movie, index) => (
                            <figure className='poster' key={index} style={{
                                backgroundImage: `url(
                                    ${movie.movie.images.clearart[0] ?
                                        `https://${movie.movie.images.clearart[0]}` :
                                        `https://${movie.movie.images.thumb[0]}` ?
                                            `https://${movie.movie.images.fanart[0]}` :
                                            "/default.jpeg"
                                    }
                                )`

                                , transform: `translateY(calc(-100% * ${posterNum}))`
                            }}>
                                <div className='movie-info'>
                                    <h1>{movie.movie.title}</h1>
                                    <span className="rating-cont">
                                        <img src="/imdb.png" alt="" />
                                        <p>{movie.movie.rating.toFixed(1)}</p>
                                    </span>
                                    <p>{movie.movie.overview}</p>
                                    <Link className='trailer-link' to={movie.movie.trailer} target='_blank'>
                                        <button className='trailer-btn'>
                                            <img src="/trailer.png" alt="" />
                                            Watch trailer
                                        </button>
                                    </Link>

                                </div>
                                <article className='slider-controls'>
                                    {
                                        movies.map((movie, index) => (
                                            <div key={index} className="number">
                                                <span className={posterNum == index ? "line" : ""}></span>
                                                <p onClick={() => setPosterNum(index)}>{(index + 1)}</p>
                                            </div>
                                        ))
                                    }
                                </article>
                                <div className="overlay"></div>
                            </figure>
                        ))
                    }
                </main>
            </section >
            <Footer />
        </>
    )
}

export default Hero
