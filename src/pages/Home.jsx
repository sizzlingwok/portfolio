import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { ExpandDivider, ProjectSlideUp } from "../components/Animations";
import { Helmet } from 'react-helmet-async';
function Home() {
  ExpandDivider();
  ProjectSlideUp();
  return (
    <div className="main">
      <Helmet>
        <title>Andy Duong</title>
        <meta
          name="description"
          content="Andy Duong is an interdisciplinary designer influenced by music & art based in the Bay Area."
        />
      </Helmet>
      <section className="landing">
        <div className="header-title">hello!~ 👋</div>
        <div className="landing-description">
          I'm Andy Duong, a Product Designer based in the Bay Area. I craft
          meaningful narratives fueled by my passion for music and art.
        </div>
        <div className="landing-direct">Scroll down to discover</div>
      </section>
      <section className="project-wrapper">
        <Link to="/spotify-party">
          <section className="project projectslideup1">
            <div className="thumbnail-container">
              <img
                className="thumbnail"
                src="images/home/spotify-party-thumbnail.webp"
                alt=""
                draggable="false"
              />
            </div>
            <div className="project-details">
              <div className="home-project-title">
                <div className="header-tag splitletter">RESPONSIVE DESIGN</div>
                <div className="splitletter">Spotify Party</div>
              </div>
              <div className="description splitword long">
                Enhancing the group listening experience for an immersive music
                exploration
              </div>
            </div>
          </section>
        </Link>
        <Link to="/sorette">
          <section className="project right-align projectslideup2">
            <div className="project-details right-align">
              <div className="home-project-title">
                <div className="header-tag splitletter">UX DESIGN</div>
                <div className="splitletter">sorette</div>
              </div>
              <div className="description right-align splitword long">
                Cloud sharing platform streamlining music collaboration with
                others
              </div>
            </div>
            <div className="thumbnail-container">
              <img
                className="thumbnail"
                src="images/home/sorette-thumbnail.webp"
                alt=""
                draggable="false"
              />
            </div>
          </section>
        </Link>
        <Link to="/mechmarket">
          <section className="project projectslideup3">
            <div className="thumbnail-container">
              <img
                className="thumbnail"
                src="images/home/mechmarket-thumbnail.webp"
                alt=""
                draggable="false"
              />
            </div>
            <div className="project-details">
              <div className="home-project-title">
                <div className="header-tag splitletter">MOBILE DESIGN</div>
                <div className="splitletter">mechmarket</div>
              </div>
              <div className="description splitword long">
                Mobile marketplace app dedicated to buying and selling keyboard related products
              </div>
            </div>
          </section>
        </Link>
      </section>
      <footer className="footer-home-page">
        <Footer />
      </footer>
    </div>
  );
}

export default Home;