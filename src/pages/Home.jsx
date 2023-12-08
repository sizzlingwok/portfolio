import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { ExpandDivider, ProjectSlideUp } from "../components/Animations";
function Home() {
  ExpandDivider();
  ProjectSlideUp();
  return (
    <div className="main">
      <section className="landing">
        <div className="header-title">hello!~ 👋</div>
        <div className="landing-description">
          I'm Andy Duong, a Product Designer based in the Bay Area. I craft
          meaningful narratives fueled by my passion for music and art.
        </div>
        <div className="landing-direct">Scroll down to discover</div>
      </section>
      <section className="project-wrapper">
        <section className="project projectslideup1">
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
            <div className="home-project-title">
              <div className="header-tag splitletter">RESPONSIVE DESIGN</div>
              <div className="splitletter">Spotify Party</div>
            </div>
            <div className="description splitword home">
              Enhancing the group listening experience for an immersive music
              exploration
            </div>
          </div>
        </section>
        <section className="project right-align projectslideup2">
          <div className="project-details right-align">
            <div className="home-project-title">
              <div className="header-tag splitletter">UX DESIGN</div>
              <div className="splitletter">sorette</div>
            </div>
            <div className="description right-align splitword extend">
              Cloud sharing platform streamlining music collaboration with
              others
            </div>
          </div>
          <Link to="/sorette">
            <div className="thumbnail-container">
              <img
                className="thumbnail"
                src="images/home/sorette-thumbnail.webp"
                alt=""
                draggable="false"
              />
            </div>
          </Link>
        </section>
        <section className="project projectslideup3">
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
            <div className="home-project-title">
              <div className="header-tag splitletter">MOBILE DESIGN</div>
              <div className="splitletter">mechmarket</div>
            </div>
            <div className="description splitword extend">
              Enhancing the group listening experience for an immersive music
              exploration
            </div>
          </div>
        </section>
      </section>
      <footer className="footer-home-page">
        <Footer />
      </footer>
    </div>
  );
}

export default Home;