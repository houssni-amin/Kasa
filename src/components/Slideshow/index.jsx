import React, { useState } from 'react'
import './slideshow.css'
import ArrowSlideshowLeft from '../../assets/ArrowSlideshowLeft.svg'
import ArrowSlideshowRight from '../../assets/ArrowSlideshowRight.svg'

function Slideshow({ images }) {
  const [index, setIndex] = useState(0)
  const totalImages = images.length - 1

  const nextslide = () => {
    setIndex(index === totalImages ? 0 : index + 1)
  }
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
