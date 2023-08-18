import { useState, useEffect } from 'react'
import MovieItem from '../components/MovieItem'
import './MovieCatalog.css'
import Card from '../UI/Card'

const MovieCatalog = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetch('http://localhost:5000/api/catalog')
      const moviesObject = await data.json()
      setMovies(moviesObject.movies)
    }

    fetchMovies()
  }, [])

  return (
    <div className='movieCatalog'>
      {movies.map((movie) => (
        <Card type='small' key={movie._id}>
          <MovieItem
            type='small'
            id={movie._id}
            name={movie.name}
            imageUrl={movie.imageUrl}
            year={movie.year}
            synopsis={movie.synopsis}
          />
        </Card>
      ))}
    </div>
  )
}

export default MovieCatalog
