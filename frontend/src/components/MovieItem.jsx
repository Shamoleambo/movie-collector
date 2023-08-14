import Card from '../UI/Card'
import './MovieItem.css'

const MovieItem = ({ name, imageUrl, year, synopsis }) => {
  return (
    <Card>
      <div className='movieTitle'>
        <h2>{name}</h2>
      </div>
      <hr />
      <div className='imageContainer'>
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
