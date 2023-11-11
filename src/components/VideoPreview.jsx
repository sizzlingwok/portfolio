import React from 'react';
import { PreviewSlideUp, SplitWord } from './Animations';
const VideoPreview = ({ videoSrc, title, description }) => {
  PreviewSlideUp();
  SplitWord();
  return (
    <div className="preview-container previewslideup">
      <div className="content-container">
        <video width="100%" height="100%" autoPlay loop muted playsInline>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <div className="content-details splitword">
        <div className="text-description semibold">{title}</div>
        <div className="text-description">{description}</div>
      </div>
    </div>
  );
}

export default VideoPreview;
