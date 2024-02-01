import './footer.css'
import FooterLogo from '../../assets/FooterLogo.svg'

function Footer() {
  return (
    <div className="footer-container">
      <img src={FooterLogo} alt="Logo Kasa" className="footer-logo" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
