import React, { useEffect, useRef, useState } from 'react';

export default function AnimatedSection({ children, className = '', id = '' }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setIsVisible(true);
      });
    }, { threshold: 0.1 });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section 
      id={id}
      className={`section ${className}`}
      ref={domRef}
    >
      <div className={`container fade-in ${isVisible ? 'visible' : ''}`}>
        {children}
      </div>
    </section>
  );
}
