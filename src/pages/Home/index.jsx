import Card from '../../components/Card'
import logements from '../../data/logements.json'
import './home.css'

function Home() {
  return (
    <div className="home-container">
      <div className="home-card">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            cover={logement.cover}
            title={logement.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
