import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/" 
        className="header-name fade-up-animation"
        style={{ "--animation-delay": ".3s" }}
      >
        andy duong
      </Link>
      <div className="header-nav">
        <Link to="/" 
          className="header-nav-link fade-up-animation"
          style={{ "--animation-delay": ".5s" }}
        >
          work
        </Link>
        <Link
          className="header-nav-link fade-up-animation"
          to="#about"
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
      </div>
    </div>
  );
}

export default Header;
