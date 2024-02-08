import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import logements from '../../data/logements.json'
import imageHome from '../../assets/imageHome.jpeg'
import './home.css'

function Home() {
  return (
    <div className="home-container">
      <div className="home-img">
        <img src={imageHome} alt="Plage Home" />
        <div className="home-dark"></div>
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <div className="home-card">
        {logements.map((logement) => (
          <Link key={logement.id} to={`/logement/${logement.id}`}>
            <Card cover={logement.cover} title={logement.title} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
