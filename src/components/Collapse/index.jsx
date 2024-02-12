import React, { useState } from 'react'
import './collapse.css'
import ArrowCollapse from '../../assets/ArrowCollapses.svg'

function Collapse({ title, text }) {
  const [isCollapsed, setIsCollapsed] = useState(false)

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
          style={{
            transform: isCollapsed ? 'rotate(0)' : 'rotate(180deg)',
            transition: '0.3s ease',
          }}
        />
      </button>

      <div
        className={
          isCollapsed ? 'collapse-text-visible' : 'collapse-text-hidden'
        }
      >
        {text}
      </div>
    </div>
  )
}

export default Collapse
