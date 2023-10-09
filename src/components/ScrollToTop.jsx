import React, { useState, useEffect } from 'react';
import { PiArrowFatLineUpBold } from 'react-icons/pi'

function ScrollToTop() {

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 300) { // Cambia 300 a la cantidad de desplazamiento en la que deseas mostrar el botón
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', toggleVisibility);
  
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);
  
    return (
      <PiArrowFatLineUpBold className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}/>
    );
  };

export default ScrollToTop
