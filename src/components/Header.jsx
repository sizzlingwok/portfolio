import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

function Header() {
  gsap.registerPlugin(ScrollToPlugin);
  const location = useLocation();
  
  const Top = (event, path) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: 0 },
      ease: 'power3.out',
    });

    if (path === location.pathname) {
      event.preventDefault();
    }
  };

  const Project = (event, path) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: ".project-wrapper", offsetY: 160 },
      ease: 'power3.out',
    });
  
    if (path === location.pathname) {
      event.preventDefault();
    }
  };

  return (
    <header className="header">
      <Link
        to="/"
        className="header-name fade-up-animation"
        style={{ "--animation-delay": ".3s" }}
        onClick={(e) => Top(e, '/')}
      >
        andy duong
      </Link>
      <nav className="header-nav">
        <Link
          to="/"
          className="header-nav-link fade-up-animation"
          style={{ "--animation-delay": ".5s" }}
          onClick={(e) => Project(e, '/')}
        >
          work
        </Link>
        <Link
          className="header-nav-link fade-up-animation"
          to="/about"
          style={{ "--animation-delay": ".7s" }}
        >
          about
        </Link>
        <a
          className="header-nav-link fade-up-animation"
          href="https://drive.google.com/file/d/1I33f24a0dPWsixZOYq1KC4aBzzf-C-cy/view"
          style={{ "--animation-delay": ".9s" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          resume
        </a>
      </nav>
    </header>
  );
}

export default Header;
