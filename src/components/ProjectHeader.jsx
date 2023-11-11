import React from 'react';
import { useLenis } from "@studio-freight/react-lenis";
import { SlideUp, SplitLetter, SplitWord } from './Animations';

function ProjectHeader({ title, description1, description2, role, tools, timeline, videoSrc, prototypeLink }) {
    const lenis = useLenis();  
    SplitWord();
    SplitLetter();
    SlideUp();
    return (
      <>
        <div className="fs-bg">
          <video width="100%" height="100%" autoPlay loop muted playsInline>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
        <div className="project-header-wrapper">
          <div className="project-header-container">
            <div className="title project-title splitletter">{title}</div>
            <div className="project-header-details">
              <hr className="divider" />
              <div className="project-description-wrapper">
                <div className="project-description splitword noscrolltrigger">{description1}</div>
                <div className="project-description splitword long noscrolltrigger">{description2}</div>
              </div>
              <div className="list-container">
                <div className="project-description">
                  <b>Role</b> - {role}
                </div>
                <div className="project-description">
                  <b>Tools</b> - {tools}
                </div>
                <div className="project-description">
                  <b>Timeline</b> - {timeline}
                </div>
              </div>
              <div className="project-buttons slideup">
                <button
                  className="project-button"
                  onClick={(event) => {
                    event.preventDefault();
                    lenis.scrollTo("#project", {
                      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                      duration: 1,
                    });
                    window.history.replaceState(
                      {},
                      document.title,
                      window.location.pathname
                    );
                  }}
                >
                  <a href="#project">View Case Study</a>
                </button>
                <button className="project-button">
                  <a
                    href={prototypeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Prototype
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default ProjectHeader;
