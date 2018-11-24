import React from "react";

import leftArrow from "../../images/left-arrow.png";
import rightArrow from "../../images/right-arrow.png";

const PhotoGallery = ({ images, imageIndex, handleLeft, handleRight }) => {
  return (
    <div id="carousel">
      <div id="left-arrow-container">
        <img src={leftArrow} alt="left arrow" onClick={handleLeft} />
      </div>
      <div className="image-container" key={imageIndex}>
        <img
          src={images[imageIndex].original}
          alt={images[imageIndex].caption}
          className="image-tag"
        />
        <div className="caption-block">
          <h2>{images[imageIndex].caption}</h2>
        </div>
      </div>
      <div id="right-arrow-container">
        <img src={rightArrow} alt="right arrow" onClick={handleRight} />
      </div>
    </div>
  );
};

export default PhotoGallery;
