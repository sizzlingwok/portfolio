import React from 'react';
import "./animations.css";
import "./App.css";
import "./index.css";
import './media-queries.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from "./App"
import { ReactLenis } from "@studio-freight/react-lenis";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReactLenis
      root
      options={{
        duration: 0.5,
        easing: (t) => (t === 1 ? 1 : 1 - Math.pow(1 - t, 5)),
      }}
    >
      <Router>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
      </Router>
    </ReactLenis>
  </React.StrictMode>
);