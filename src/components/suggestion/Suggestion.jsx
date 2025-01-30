import React, { useContext, useState } from 'react'
import { mContext } from '../../movieContext'
import "./suggestion.scss"

function Suggestion({ data }) {


    const [isMovie, setIsMovie] = useState(true)

    console.log(data[0])

    // const dataMapping = () => {
    //     if(data.map((item) => item.movie)){
    //         console.log(data)
    //         console.log()
    //     } else{
    //         console.log("series")
    //     }
    // }
    // dataMapping()

    return (
        <section className='suggestion-section'>
            {
                isMovie ?

                    <main className="suggestion-cont">
                        <header>
                            <h2>Suggested Movies</h2>
                            <p>See more &gt;</p>
                        </header>
                        {
                            <figure className="suggestions-slider">
                                {data && data.map(movie => (
                                    <div className="suggested-movie">
                                        <img src={`https://${movie.movie.images.poster[0]}`} alt="" />
                                        <p>{movie.movie.country.toUpperCase()} {movie.movie.year}</p>
                                        <p>{movie.movie.title}</p>
                                        <span className="rating">
                                            <img src="/imdb.png" alt="" />
                                            <p>{movie.movie.rating.toFixed(1)}</p>
                                        </span>
                                        <p>{movie.movie.genres.toString()}</p>
                                    </div>
                                ))}
                            </figure>
                        }
                    </main>
                    :
                    <main className="suggestion-cont">
                        <div></div>
                    </main>
            }
        </section>
    )
}

export default Suggestion
