// ImageSlider.js
import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images,captions=4000, autoSlideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      slideToIndex((currentIndex + 1) % images.length);
    }, autoSlideInterval);

    return () => clearInterval(intervalId);
  }, [currentIndex, images,captions, autoSlideInterval]);

  const slideToIndex = (index) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    slideToIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    slideToIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="image-slider-container">
      <button className="arrow-button" onClick={handlePrevClick}>&lt;</button>
      <img className="slider-image" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <div className="caption"><h1> {captions[currentIndex]}</h1></div>
      <button className="arrow-button" onClick={handleNextClick}>&gt;</button>
    </div>
  );
};

export default ImageSlider;
