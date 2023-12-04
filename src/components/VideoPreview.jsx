import React from 'react';
import { PreviewSlideUp, SplitWord } from './Animations';
const VideoPreview = ({ videoSrc, title, description }) => {
  PreviewSlideUp();
  SplitWord();
  return (
    <div className="preview-container previewslideup">
      <section className="content-container">
        <video width="100%" height="100%" autoPlay loop muted playsInline>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </section>
      <section className="content-details splitword">
        <p className="text-description semibold">{title}</p>
        <p className="text-description">{description}</p>
      </section>
    </div>
  );
}

export default VideoPreview;
