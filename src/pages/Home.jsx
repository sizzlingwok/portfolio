import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import transition from "../transition";
function Home() {
  return (
    <div className="main">
      <div className="landing">
        <div className="header-title">hello!~ 👋</div>
        <div className="landing-description">
          I'm Andy Duong, a Product Designer based in the Bay Area. I craft
          meaningful narratives fueled by my passion for music and art.
        </div>
        <div className="landing-direct">Scroll down to discover</div>
      </div>
      <div className="project-wrapper">
        <div className="project">
          <Link to="/spotify-party">
            <div className="thumbnail-container">
              <img
                className="thumbnail"
                src="images/home/spotify-party-thumbnail.webp"
                alt=""
                draggable="false"
              />
            </div>
          </Link>
          <div className="project-details">
            <div className="title">Spotify Party</div>
            <div className="description">
              Enhancing the group listening experience for an immersive music
              exploration
            </div>
          </div>
        </div>
        <div className="project right-align">
          <div className="project-details right-align">
            <div className="title">sorette</div>
            <div className="description">Project Description</div>
          </div>
          <div className="right-align-thumbnail-container">
            <img
              className="thumbnail"
              src="images/home/img2.jpeg"
              alt=""
              draggable="false"
            />
          </div>
        </div>
        <div className="wide-wrapper">
          <div className="thumbnail-container wide">
            <img
              className="thumbnail"
              src="images/home/img3.jpeg"
              alt=""
              draggable="false"
            />
          </div>
          <div className="project-details wide">
            <div className="title">mechmarket</div>
            <div className="description">Project Description</div>
          </div>
        </div>
      </div>
      <div className="footer-home-page">
        <Footer />
      </div>
    </div>
  );
}

export default Home;