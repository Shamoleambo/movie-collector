import { useNavigate } from 'react-router-dom'
import './MovieItem.css'

const MovieItem = ({ id, name, imageUrl, year, synopsis, type }) => {
  const navigate = useNavigate()

  const navigationHandler = () => {
    navigate(`/movies/${id}`)
  }

  const navigationButton = <button onClick={navigationHandler}>Details</button>

  const movieDetailsInfo = (
    <>
      <div className='yearContainer'>
        <span className='year'>Year: {year}</span>
      </div>
      <div className='synopsisContainer'>
        <span className='synopsis'>Synopsis: {synopsis}</span>
      </div>
    </>
  )

  return (
    <div className={type === 'small' ? 'movieItemSmall' : 'movieItemBig'}>
      <div className='movieTitle' onClick={navigationHandler}>
        <h2>{name}</h2>
      </div>
      <hr className='divider' />
      <div className='imageContainer' onClick={navigationHandler}>
        <img src={imageUrl} alt={name} />
      </div>
      <hr className='divider' />
      <div className='info'>
        {type === 'small' ? navigationButton : movieDetailsInfo}
        <div className='purchaseContainer'>
          <div className='price'>$ 0.00</div>
          <button>+</button>
          <button>-</button>
        </div>
      </div>
    </div>
  )
}

export default MovieItem
