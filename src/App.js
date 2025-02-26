import React from 'react';
import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Homepage from './components/home';
import About from './components/about';
import Portfolio from './components/portfolio';
import "./styles.css";

const App =() => {
  const containerRef = useRef(null); //reference to the container (DOM) 

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp: .08, //smoothness
    });

    return () => {
      scroll.destroy(); //destroys the scroll when the component is unmounted
    };

  }, []); //dependency array that tells react when to run effect

  return (
    <div className="app">
        <div data-scroll-container ref={containerRef}>
          <Homepage />
          <About />
          <Portfolio />
      </div>
    </div>
  );
};

export default App;