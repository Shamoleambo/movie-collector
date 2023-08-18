import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MovieItem from '../components/MovieItem'
import Card from '../UI/Card'
// import './MoviePage.css'

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
    <Card cardType='big'>
      <MovieItem
        key={movie._id}
        type='big'
        id={movie._id}
        name={movie.name}
        imageUrl={movie.imageUrl}
        year={movie.year}
        synopsis={movie.synopsis}
      />
    </Card>
  )
}

export default MoviePage
