import { Link } from 'react-router-dom'
import './header.css'
import HeaderLogo from '../../assets/HeaderLogo.svg'

function Header() {
  return (
    <div className="header-container">
      <img src={HeaderLogo} alt="Logo Kasa" className="header-logo" />
      <nav className="header-nav">
        <Link to={'/'} className="header-button button-left">
          Accueil
        </Link>
        <Link to={'/propos'} className="header-button button-right">
          A Propos
        </Link>
      </nav>
    </div>
  )
}

export default Header
