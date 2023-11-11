import React from 'react';
import { ImageZoom } from './ImageZoom';

function ArchImages({ image1, image2, image3, image4 }) {
  return (
    <>
      <div className="image-header-wrapper row no-padding">
        <div className="preview-container no-padding">
          <div className="project-image">
            <ImageZoom
              className="project-image"
              src={image1.src}
              alt=""
              draggable="false"
            />
          </div>
          <div className="content-details">
            <div className="text-description semibold">{image1.text}</div>
            <div className="text-description"></div>
          </div>
        </div>
        <div className="preview-container no-padding">
          <div className="project-image">
            <ImageZoom
              className="project-image"
              src={image2.src}
              alt=""
              draggable="false"
            />
          </div>
          <div className="content-details">
            <div className="text-description semibold">{image2.text}</div>
            <div className="text-description"></div>
          </div>
        </div>
      </div>
      <div className="image-header-wrapper row no-padding ending">
        <div className="preview-container no-padding">
          <div className="project-image">
            <ImageZoom
              className="project-image"
              src={image3.src}
              alt=""
              draggable="false"
            />
          </div>
          <div className="content-details">
            <div className="text-description semibold">{image3.text}</div>
            <div className="text-description"></div>
          </div>
        </div>
        <div className="preview-container no-padding">
          <div className="project-image">
            <ImageZoom
              className="project-image"
              src={image4.src}
              alt=""
              draggable="false"
            />
          </div>
          <div className="content-details">
            <div className="text-description semibold">{image4.text}</div>
            <div className="text-description"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArchImages;
