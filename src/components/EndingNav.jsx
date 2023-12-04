import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { EndingNavAnimation } from './Animations';
gsap.registerPlugin(ScrollTrigger);

function EndingNav({ prevLink, nextLink, prevText, nextText }) {
  EndingNavAnimation();

  return (
    <nav className="ending-nav-wrapper">
      <Link to={prevLink} className="prev-nav">
        <nav className="nav-text">{prevText}</nav>
        <div className="arrow">←</div>
      </Link>
      <Link to={nextLink} className="next-nav">
        <div className="arrow">→</div>
        <nav className="nav-text">{nextText}</nav>
      </Link>
    </nav>
  );
}

export default EndingNav;
