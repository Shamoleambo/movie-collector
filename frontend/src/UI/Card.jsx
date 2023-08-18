import classes from './Card.module.css'

const Card = (props) => {
  const cardType = props.cardType
  return (
    <div className={cardType === 'small' ? classes.cardSmall : classes.cardBig}>
      {props.children}
    </div>
  )
}

export default Card
