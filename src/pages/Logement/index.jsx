import { useParams } from 'react-router-dom'
import logements from '../../data/logements.json'
import './logement.css'
import Collapse from '../../components/Collapse'

function Logement() {
  const { id } = useParams()
  const logement = logements.find((logement) => logement.id === id)
  const { title, location, description, equipments, tags, host, rating } =
    logement
  const { name, picture } = host

  const [firstName, lastName] = name.split(' ')

  const StarsRating = (rating) => {
    const fullStars = parseInt(rating)
    const emptyStars = 5 - fullStars

    const stars = []

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`fullStars${i}`}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z"
            fill="#FF6060"
          />
        </svg>,
      )
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`emptyStars${i}`}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z"
            fill="#E3E3E3"
          />
        </svg>,
      )
    }

    return stars
  }

  return (
    <div className="logement-container">
      <div className="logement-top">
        <div className="logement-top-left">
          <h1>{title}</h1>
          <p className="logement-location">{location}</p>
          <div className="tags">
            {tags.map((tag, index) => (
              <p key={index} className="tag">
                {tag}
              </p>
            ))}
          </div>
        </div>

        <div className="logement-top-right">
          <div className="host-infos">
            <div className="stars">{StarsRating(rating)}</div>
            <div className="name-picture">
              <div className="firstname-lastname">
                <p>{lastName}</p>
                <p>{firstName}</p>
              </div>
              <img src={picture} alt="host img" />
            </div>
          </div>
        </div>
      </div>
      <div className="logement-collapses">
        <div className="collapse-left">
          <Collapse title="Description" text={description} />
        </div>
        <div className="collapse-right">
          <Collapse
            title="Équipements"
            text={equipments.map((equipment, index) => (
              <p key={index} className="txt-equipements">
                {equipment}
              </p>
            ))}
          />
        </div>
      </div>
    </div>
  )
}

export default Logement
