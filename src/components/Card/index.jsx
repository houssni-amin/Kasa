import './card.css'

function Card({ title, cover }) {
  return (
    <div className="card-container">
      <img src={cover} alt="Cover" />
      <div className="gradiant"></div>
      <p>{title}</p>
    </div>
  )
}

export default Card
