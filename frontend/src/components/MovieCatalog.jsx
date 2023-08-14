import { useState, useEffect } from 'react'
import MovieItem from './MovieItem'

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
        <MovieItem
          key={movie._id}
          name={movie.name}
          imageUrl={movie.imageUrl}
          year={movie.year}
          synopsis={movie.synopsis}
        />
      ))}
    </div>
  )
}

export default MovieCatalog