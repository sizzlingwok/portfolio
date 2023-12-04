import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home.jsx';
import Spotify from './pages/spotify.jsx';
import Sorette from './pages/Sorette.jsx';
import ScrollToTop from './ScrollToTop';
import { ReactLenis } from '@studio-freight/react-lenis';

import './animations.css';
import './App.css';
import './index.css';
import './media-queries.css';
function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* <ReactLenis
        root
        options={{
          duration: 0.5,
          easing: (t) => (t === 1 ? 1 : 1 - Math.pow(1 - t, 5)),
        }}
      ></ReactLenis> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spotify-party" element={<Spotify />} />
        <Route path="/sorette" element={<Sorette />} />
      </Routes>
    </Router>
  );
}

export default App;
