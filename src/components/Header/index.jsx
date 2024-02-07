import { NavLink } from 'react-router-dom'
import './header.css'
import HeaderLogo from '../../assets/HeaderLogo.svg'

function Header() {
  return (
    <div className="header-container">
      <img src={HeaderLogo} alt="Logo Kasa" />
      <nav className="header-nav">
        <NavLink to={'/'} className="header-button button-left">
          Accueil
        </NavLink>
        <NavLink to={'/propos'} className="header-button button-right">
          A Propos
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
