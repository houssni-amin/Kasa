import './banner.css'

function Banner({ imgBanner, txtBanner }) {
  return (
    <div className="banner-container">
      {/* Image de couverture */}
      <img src={imgBanner} alt="img du banner" />
      {/* Effet d'ombrage */}
      <div className="dark-banner"></div>
      {/* Texte pour le Banner si besoin */}
      <p>{txtBanner}</p>
    </div>
  )
}

export default Banner
