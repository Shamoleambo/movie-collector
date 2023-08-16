import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './MoviePage.css'

const MoviePage = () => {
  const [movie, setMovie] = useState({})
  const params = useParams()

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await fetch(`http://localhost:5000/api/catalog/${params.id}`)
      const movie = await data.json()
      setMovie(movie)
    }

    fetchMovie()
  }, [params])

  return (
    <div className='movieDetails'>
      <div className='movieTitle'>
        <h1>{movie.name}</h1>
      </div>
      <div className='imageContainer'>
        <img src={movie.imageUrl} alt={`${movie.name} cover art`} />
      </div>
      <div className='info'>
        <div className='yearContainer'>
          <span className='year'>Year: {movie.year}</span>
        </div>
        <div className='synopsisContainer'>
          <span className='synopsis'>Synopsis: {movie.synopsis}</span>
        </div>
      </div>
    </div>
  )
}

export default MoviePage
