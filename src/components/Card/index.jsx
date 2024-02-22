import './card.css'

function Card({ title, cover }) {
  return (
    <div className="card-container">
      {/* Image de couverture */}
      <img src={cover} alt="Cover" />
      {/* Gradient pour l'effet d'ombrage */}
      <div className="gradiant"></div>
      {/* Titre de la carte */}
      <p>{title}</p>
    </div>
  )
}

export default Card
