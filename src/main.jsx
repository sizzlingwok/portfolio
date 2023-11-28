import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ReactLenis } from '@studio-freight/react-lenis';


createRoot(document.getElementById("root")).render(
  <ReactLenis
    root
    options={{
      duration: 0.5,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(1 - t, 5)),
    }}
  >
    <App />
  </ReactLenis>
);