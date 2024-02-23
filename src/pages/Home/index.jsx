import { Link } from 'react-router-dom'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import logements from '../../data/logements.json'
import imageHome from '../../assets/imageHome.jpeg'
import './home.css'

function Home() {
  return (
    <div className="home-container">
      {/* Utilisation du composant Banner */}
      <Banner
        imgBanner={imageHome}
        txtBanner="Chez vous, partout et ailleurs"
      />
      <div className="home-card">
        {/* Mapping à travers les données de logements et création de liens */}
        {logements.map((logement) => (
          <Link key={logement.id} to={`/logement/${logement.id}`}>
            {/* Lien vers la page de détail du logement */}
            {/* Utilisation du composant Card pour chaque logement */}
            <Card cover={logement.cover} title={logement.title} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
