import { Link } from 'react-router-dom'
import './error.css'

function Error() {
  return (
    <div className="error-container">
      <h1 className="error-h1">404</h1>
      <p className="error-text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to={'/'} className="error-button">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
