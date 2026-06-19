'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HorizontalGallery({ children }) {
  const targetRef = useRef(null);
  const containerRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const updateScrollWidth = () => {
      if (containerRef.current) {
        const totalWidth = containerRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        // We add some padding to the end so the last item doesn't stick to the edge
        setScrollWidth(totalWidth - viewportWidth + 100);
      }
    };

    updateScrollWidth();
    window.addEventListener('resize', updateScrollWidth);
    return () => window.removeEventListener('resize', updateScrollWidth);
  }, [children]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollWidth]);

  return (
    <section 
      ref={targetRef} 
      style={{ 
        position: 'relative', 
        height: '400vh', 
        background: 'var(--color-bg-main)',
        zIndex: 10
      }}
    >
      <div style={{ position: 'sticky', top: 0, display: 'flex', height: '100vh', overflow: 'hidden', alignItems: 'center' }}>
        <motion.div ref={containerRef} style={{ x, display: 'flex', paddingLeft: '5vw' }}>
          {children}
        </motion.div>
      </div>
    </section>
  );
}
