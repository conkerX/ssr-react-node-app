import React from "react";

import PhotoGallery from "./PhotoGallery.js";

const ModuleTwo = ({ images, imageIndex, handleLeft, handleRight }) => {
  return (
    <div id="module-two-container">
      <h2>Exercise 2</h2>
      <PhotoGallery
        images={images}
        imageIndex={imageIndex}
        handleLeft={handleLeft}
        handleRight={handleRight}
      />
    </div>
  );
};

export default ModuleTwo;
