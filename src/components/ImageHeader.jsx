import React from 'react';

import { ImageZoom } from './ImageZoom';

function ImageHeader({ image1, image2, image3, image4 }) {
  return (
    <div className="image-header-wrapper">
      <div id="project-thumbnails" className="image-header">
        <div className="project-image">
          <ImageZoom
            className="project-image"
            src={image1.src}
            alt=""
            draggable="false"
          />
        </div>
        <div className="project-image">
          <ImageZoom
            className="project-image"
            src={image2.src}
            alt=""
            draggable="false"
          />
        </div>
      </div>
      <div className="image-header">
        <div className="project-image">
          <ImageZoom
            className="project-image"
            src={image3.src}
            alt=""
            draggable="false"
          />
        </div>
        <div className="project-image">
          <ImageZoom
            className="project-image"
            src={image4.src}
            alt=""
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageHeader;
