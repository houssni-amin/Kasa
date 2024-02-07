import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import logements from '../../data/logements.json'
import imageHome from '../../assets/imageHome.jpeg'
import './home.css'

function Home() {
  return (
    <div>
      <div className="home-top">
        <img src={imageHome} alt="Plage Home" className="home-img" />
        <div className="home-make"></div>
        <p className="home-txt">Chez vous, partout et ailleurs</p>
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
