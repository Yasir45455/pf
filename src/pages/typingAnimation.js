import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingAnimation = () => {
  // Create a reference to the element where you want to apply the typing effect
  const typedElementRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedElementRef.current, {
      strings: ['Masood'],
      typeSpeed: 200,
      loop: false,
      showCursor: false, // Hide the cursor
    });

    // Cleanup the effect when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="heading-typing" ref={typedElementRef}></span>;
};

export default TypingAnimation;
