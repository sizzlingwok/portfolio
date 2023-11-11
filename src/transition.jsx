import React from 'react';
import "./animations.css";

const transition = (Og) => {
  return () => {

    const handleAnimationStart = () => {
      window.scrollTo(0, 0);
    };

    return (
      <>
        <Og />
        <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ 
            duration: 1, 
            ease: [0.075, 0.82, 0.165, 1],
            onComplete: handleAnimationStart
          }}
        />
        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.075, 0.82, 0.165, 1] }}
        />
      </>
    ); 
  };
};

export default transition;
