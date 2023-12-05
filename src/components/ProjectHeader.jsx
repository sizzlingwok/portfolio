import React from 'react';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { SlideUp, SplitLetter, SplitWordHeader } from './Animations';
import gsap from 'gsap';
function ProjectHeader({ title, description1, description2, role, tools, timeline, videoSrc, prototypeLink }) {
    gsap.registerPlugin(ScrollToPlugin);
    SplitWordHeader();
    SplitLetter();
    SlideUp();
    return (
      <>
        <div className="fs-bg">
          <video width="100%" height="100%" autoPlay loop muted playsInline>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
        <section className="project-header-wrapper">
          <section className="project-header-container">
            <p className="title project-title splitletter">{title}</p>
            <section className="project-header-details">
              <hr className="divider" />
              <section className="project-description-wrapper">
                <p className="project-description splitwordheader">
                  {description1}
                </p>
                <p className="project-description splitwordheader long">
                  {description2}
                </p>
              </section>
              <section className="list-container">
                <p className="project-description splitwordheader long">
                  <b>Role</b> - {role}
                </p>
                <p className="project-description splitwordheader long">
                  <b>Tools</b> - {tools}
                </p>
                <p className="project-description splitwordheader long">
                  <b>Timeline</b> - {timeline}
                </p>
              </section>
              <section className="project-buttons slideup">
                <button
                  className="project-button"
                  onClick={() => {
                    gsap.to(window, {
                      duration: 1,
                      scrollTo: { y: "#project"},
                      ease: "power3.out",
                    });
                  }}
                >
                  View Case Study
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
              </section>
            </section>
          </section>
        </section>
      </>
    );
}

export default ProjectHeader;
