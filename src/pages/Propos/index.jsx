import { useState } from 'react'
import './propos.css'
import imagePropos from '../../assets/imagePropos.jpeg'

function Propos() {
  const [fiabilite, setFiabilite] = useState(false)
  const [respect, setRespect] = useState(false)
  const [service, setService] = useState(false)
  const [securite, setSecurite] = useState(false)

  const collapseFiablilte = () => {
    setFiabilite(!fiabilite)
  }
  const collapseRespect = () => {
    setRespect(!respect)
  }
  const collapseService = () => {
    setService(!service)
  }
  const collapseSecurite = () => {
    setSecurite(!securite)
  }

  return (
    <div className="propos-container">
      <div className="propos-top">
        <img src={imagePropos} alt="Propos img" className="propos-img" />
        <div className="propos-make"></div>
      </div>
      <div
        className="propos-collapse"
        style={{
          height: fiabilite ? '150px' : '80px',
        }}
      >
        <button onClick={collapseFiablilte} className="propos-nom">
          <span>Fiabilité</span>
          <svg
            width="24"
            height="14"
            viewBox="0 0 24 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: fiabilite ? 'rotate(180deg)' : 'rotate(0)',
              transition: '0.3s ease',
            }}
          >
            <path
              d="M10.7897 13.2103C11.4591 13.8797 12.5462 13.8797 13.2157 13.2103L23.4979 2.92804C24.1674 2.25862 24.1674 1.17148 23.4979 0.502064C22.8285 -0.167355 21.7414 -0.167355 21.072 0.502064L12 9.57403L2.92804 0.507419C2.25862 -0.162 1.17148 -0.162 0.502064 0.507419C-0.167355 1.17684 -0.167355 2.26397 0.502064 2.93339L10.7843 13.2157L10.7897 13.2103Z"
              fill="white"
            />
          </svg>
        </button>
        {fiabilite && (
          <p className="collapse-txt">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        )}
      </div>

      <div
        className="propos-collapse"
        style={{
          height: respect ? '150px' : '80px',
        }}
      >
        <button onClick={collapseRespect} className="propos-nom">
          <span>Respect</span>
          <svg
            width="24"
            height="14"
            viewBox="0 0 24 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: respect ? 'rotate(180deg)' : 'rotate(0)',
              transition: '0.3s ease',
            }}
          >
            <path
              d="M10.7897 13.2103C11.4591 13.8797 12.5462 13.8797 13.2157 13.2103L23.4979 2.92804C24.1674 2.25862 24.1674 1.17148 23.4979 0.502064C22.8285 -0.167355 21.7414 -0.167355 21.072 0.502064L12 9.57403L2.92804 0.507419C2.25862 -0.162 1.17148 -0.162 0.502064 0.507419C-0.167355 1.17684 -0.167355 2.26397 0.502064 2.93339L10.7843 13.2157L10.7897 13.2103Z"
              fill="white"
            />
          </svg>
        </button>
        {respect && (
          <p className="collapse-txt">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        )}
      </div>

      <div
        className="propos-collapse"
        style={{
          height: service ? '150px' : '80px',
        }}
      >
        <button onClick={collapseService} className="propos-nom">
          <span>Service</span>
          <svg
            width="24"
            height="14"
            viewBox="0 0 24 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: service ? 'rotate(180deg)' : 'rotate(0)',
              transition: '0.3s ease',
            }}
          >
            <path
              d="M10.7897 13.2103C11.4591 13.8797 12.5462 13.8797 13.2157 13.2103L23.4979 2.92804C24.1674 2.25862 24.1674 1.17148 23.4979 0.502064C22.8285 -0.167355 21.7414 -0.167355 21.072 0.502064L12 9.57403L2.92804 0.507419C2.25862 -0.162 1.17148 -0.162 0.502064 0.507419C-0.167355 1.17684 -0.167355 2.26397 0.502064 2.93339L10.7843 13.2157L10.7897 13.2103Z"
              fill="white"
            />
          </svg>
        </button>
        {service && (
          <p className="collapse-txt">
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        )}
      </div>

      <div
        className="propos-collapse"
        style={{
          height: securite ? '180px' : '80px',
        }}
      >
        <button onClick={collapseSecurite} className="propos-nom">
          <span>Sécurité</span>
          <svg
            width="24"
            height="14"
            viewBox="0 0 24 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: securite ? 'rotate(180deg)' : 'rotate(0)',
              transition: '0.3s ease',
            }}
          >
            <path
              d="M10.7897 13.2103C11.4591 13.8797 12.5462 13.8797 13.2157 13.2103L23.4979 2.92804C24.1674 2.25862 24.1674 1.17148 23.4979 0.502064C22.8285 -0.167355 21.7414 -0.167355 21.072 0.502064L12 9.57403L2.92804 0.507419C2.25862 -0.162 1.17148 -0.162 0.502064 0.507419C-0.167355 1.17684 -0.167355 2.26397 0.502064 2.93339L10.7843 13.2157L10.7897 13.2103Z"
              fill="white"
            />
          </svg>
        </button>
        {securite && (
          <p className="collapse-txt">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        )}
      </div>
    </div>
  )
}

export default Propos
