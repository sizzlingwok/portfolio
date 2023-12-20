import React from 'react';
import { ImageZoom } from './ImageZoom';

function ImageHeader({ image1, image2, image3, image4, padding }) {
  const hasPadding = padding === 'yes';

  const imageHeaderStyle = {
    paddingBottom: hasPadding ? '4rem' : '0',
  };

  return (
    <section className="image-header-wrapper" style={imageHeaderStyle}>
      <section id="project-thumbnails" className="image-header">
        <figure className="project-image">
          <ImageZoom
            className="project-image"
            src={image1.src}
            alt=""
            draggable="false"
          />
        </figure>
        <figure className="project-image">
          <ImageZoom
            className="project-image"
            src={image2.src}
            alt=""
            draggable="false"
          />
        </figure>
      </section>
      <section className="image-header">
        <figure className="project-image">
          <ImageZoom
            className="project-image"
            src={image3.src}
            alt=""
            draggable="false"
          />
        </figure>
        <figure className="project-image">
          <ImageZoom
            className="project-image"
            src={image4.src}
            alt=""
            draggable="false"
          />
        </figure>
      </section>
    </section>
  );
}

export default ImageHeader;
