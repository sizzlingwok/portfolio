import React from 'react';
import { ImageZoom } from './ImageZoom';

function ArchImages({ image1, image2, image3, image4 }) {
  return (
    <>
      <section className="image-header-wrapper row no-padding">
        <div className="preview-container no-padding">
          <figure className="project-image">
            <ImageZoom
              className="project-image"
              src={image1.src}
              alt=""
              draggable="false"
            />
          </figure>
          <figcaption className="content-details">
            <p className="text-description semibold">{image1.text}</p>
            <p className="text-description"></p>
          </figcaption>
        </div>
        <div className="preview-container no-padding">
          <figure className="project-image">
            <ImageZoom
              className="project-image"
              src={image2.src}
              alt=""
              draggable="false"
            />
          </figure>
          <figcaption className="content-details">
            <p className="text-description semibold">{image2.text}</p>
            <p className="text-description"></p>
          </figcaption>
        </div>
      </section>
      <section className="image-header-wrapper row no-padding ending">
        <div className="preview-container no-padding">
          <figure className="project-image">
            <ImageZoom
              className="project-image"
              src={image3.src}
              alt=""
              draggable="false"
            />
          </figure>
          <figcaption className="content-details">
            <p className="text-description semibold">{image3.text}</p>
            <p className="text-description"></p>
          </figcaption>
        </div>
        <div className="preview-container no-padding">
          <figure className="project-image">
            <ImageZoom
              className="project-image"
              src={image4.src}
              alt=""
              draggable="false"
            />
          </figure>
          <figcaption className="content-details">
            <p className="text-description semibold">{image4.text}</p>
            <p className="text-description"></p>
          </figcaption>
        </div>
      </section>
    </>
  );
}

export default ArchImages;
