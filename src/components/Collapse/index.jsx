// Importation de React et du hook useState
import React, { useState } from 'react'
import './collapse.css'
import ArrowCollapse from '../../assets/ArrowCollapses.svg'

function Collapse({ title, text }) {
  // Déclaration du state pour gérer l'état du Collapse
  const [isCollapsed, setIsCollapsed] = useState(false)

  // Fonction pour inverser l'état du Collapse
  const Change = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className="collapses-container">
      <button className="collapse-button" onClick={Change}>
        {title}
        <img
          src={ArrowCollapse}
          alt="fleche"
          className="arrow-collapse"
          // Rotation  et transition de l'icône en fonction de l'état du Collapse
          style={{
            transform: isCollapsed ? 'rotate(0)' : 'rotate(180deg)',
            transition: '0.3s ease',
          }}
        />
      </button>

      <div
        className={
          // Afficher ou masquer le texte du Collapse
          isCollapsed ? 'collapse-text-visible' : 'collapse-text-hidden'
        }
      >
        {/* Contenu textuel du Collapse */}
        {text}
      </div>
    </div>
  )
}

export default Collapse
