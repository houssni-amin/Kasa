// Importation de React et du hook useState
import React, { useState } from 'react'
import './slideshow.css'
import ArrowSlideshowLeft from '../../assets/ArrowSlideshowLeft.svg'
import ArrowSlideshowRight from '../../assets/ArrowSlideshowRight.svg'

function Slideshow({ images }) {
  // Déclaration du state pour suivre l'index de l'image affichée
  const [index, setIndex] = useState(0)
  // Calcul du nombre total d'images
  const totalImages = images.length - 1

  // Fonction pour passer à la diapositive suivante et revenir à la première si on est sur la dernière diapositive
  const nextslide = () => {
    setIndex(index === totalImages ? 0 : index + 1)
  }
  // Fonction pour passer à la diapositive précédente et revenir à la dernière si on est sur la première diapositive
  const prevslide = () => {
    setIndex(index === 0 ? totalImages : index - 1)
  }

  return (
    <div className="slideshow-container">
      <div className="slideshow-img">
        <img
          src={images[index]}
          className="slide"
          key={`slide ${index}`}
          alt={`slide ${index}`}
        />
      </div>

      {/* Affichage des flèches de navigation et du compteur d'images si le diaporama contient plus d'une image */}
      {totalImages > 0 && (
        <div>
          <button onClick={prevslide} className="btn-arrowSlideshow-left">
            <img
              src={ArrowSlideshowLeft}
              alt={'flèche gauche'}
              className="arrowSlideshow-left"
            />
          </button>
          <button onClick={nextslide} className="btn-arrowSlideshow-right">
            <img
              src={ArrowSlideshowRight}
              alt={'flèche droite'}
              className="arrowSlideshow-right"
            />
          </button>

          <p className="slideshow-compteur-img">
            {index + 1} / {totalImages + 1}
          </p>
        </div>
      )}
    </div>
  )
}

export default Slideshow
