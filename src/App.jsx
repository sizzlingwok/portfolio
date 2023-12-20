import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Spotify from './pages/spotify.jsx';
import Sorette from './pages/Sorette.jsx';
import Mechmarket from './pages/mechmarket.jsx';
import ScrollToTop from './ScrollToTop';


import './animations.css';
import './App.css';
import './index.css';
import './media-queries.css';
function App() {

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/spotify-party" element={<Spotify />} />
        <Route path="/sorette" element={<Sorette />} />
        <Route path="/mechmarket" element={<Mechmarket />} />
      </Routes>
    </Router>
  );
}

export default App;
