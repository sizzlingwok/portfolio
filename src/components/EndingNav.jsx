import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { EndingNavAnimation } from './Animations';
gsap.registerPlugin(ScrollTrigger);

function EndingNav({ prevLink, nextLink, prevText, nextText }) {
  EndingNavAnimation();

  return (
    <div className="ending-nav-wrapper">
      <Link to={prevLink} className="prev-nav">
        <div className="nav-text">{prevText}</div>
        <div className="arrow">←</div>
      </Link>
      <Link to={nextLink} className="next-nav">
        <div className="arrow">→</div>
        <div className="nav-text">{nextText}</div>
      </Link>
    </div>
  );
}

export default EndingNav;
