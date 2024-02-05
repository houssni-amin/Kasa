import './card.css'

function Card({ title, cover }) {
  return (
    <div className="card-container">
      <img src={cover} alt="Cover" className="card-cover" />
      <div className="gradiant"></div>
      <p className="card-title">{title}</p>
    </div>
  )
}

export default Card
