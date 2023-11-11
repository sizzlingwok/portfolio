import React from 'react';
import Header from "./components/Header";
import { Routes, Route, useLocation } from "react-router-dom"
import Home from './pages/Home.jsx';
import Spotify from './pages/spotify.jsx';
import ScrollToTop from './ScrollToTop';

function App() {
    const location = useLocation();

    return (
      <>
        <ScrollToTop />
        <Header />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/spotify-party" element={<Spotify />} />
        </Routes>
      </>
    );
}

export default App;
