import { useNavigate } from 'react-router-dom'
import Card from '../UI/Card'
import './MovieItem.css'

const MovieItem = ({ id, name, imageUrl, year, synopsis, className }) => {
  const navigate = useNavigate()

  const navigationHandler = () => {
    navigate(`/movies/${id}`)
  }

  return (
    <Card className={className}>
      <div className='movieTitle' onClick={navigationHandler}>
        <h2>{name}</h2>
      </div>
      <hr />
      <div className='imageContainer' onClick={navigationHandler}>
        <img src={imageUrl} alt={name} />
      </div>
      <hr />
      <div className='info'>
        <div className='yearContainer'>
          <span className='year'>Year: {year}</span>
        </div>
        <div className='synopsisContainer'>
          <span className='synopsis'>Synopsis: {synopsis}</span>
        </div>
      </div>
    </Card>
  )
}

export default MovieItem
