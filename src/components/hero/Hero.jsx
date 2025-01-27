import React, { useEffect, useState } from 'react'
import "./hero.scss"
import Navbar from "../navbar/Navbar"

function Hero() {

    const movies = [
        {
            "name": "John Wick 1 : Parabellum",
            "rating": "86.0 / 100",
            "desc": "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
            "image": "/poster.jpg"
        },
        {
            "name": "John Wick 2 : Parabellum",
            "rating": "86.0 / 100",
            "desc": "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
            "image": "/poster02.jpg"
        },
        {
            "name": "John Wick 3 : Parabellum",
            "rating": "86.0 / 100",
            "desc": "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
            "image": "/poster03.jpg"
        },
        {
            "name": "John Wick 4 : Parabellum",
            "rating": "86.0 / 100",
            "desc": "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
            "image": "/poster.jpg"
        },
        {
            "name": "John Wick 5 : Parabellum",
            "rating": "86.0 / 100",
            "desc": "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
            "image": "/poster02.jpg"
        }
    ]

    const [posterNum, setPosterNum] = useState(0)

    //auto-scroll function
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setPosterNum(prev => (prev + 1) % movies.length)
    //     }, 5000);

    //     return () => clearInterval(interval)

    // }, [movies.length])


    return (
        <section className='hero-section'>
            <main className="slider-cont">
                <Navbar />
                {
                    movies.map((movie, index) => (
                        <figure className='poster' key={index} style={{ backgroundImage: `url(${movie.image})`, transform: `translateY(calc(-100% * ${posterNum}))` }}>
                            <div className='movie-info'>
                                <h1>{movie.name}</h1>
                                <span className="rating-cont">
                                    <img src="/imdb.png" alt="" />
                                    <p>{movie.rating}</p>
                                </span>
                                <p>{movie.desc}</p>
                                <button className='trailer-btn'>
                                    <img src="/trailer.png" alt="" />
                                    Watch trailer
                                </button>
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
        </section>
    )
}

export default Hero
