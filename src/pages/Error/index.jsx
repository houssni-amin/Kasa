// Import du composant Link pour la navigation
import { Link } from 'react-router-dom'
import './error.css'

function Error() {
  return (
    <div className="error-container">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      {/* Lien de retour vers la page d'accueil */}
      <Link to={'/'} className="error-button">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
