import React, { useEffect, useState } from 'react';

export const ScrollRibbon: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once initially
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 right-4 md:right-12 w-3 md:w-5 z-50 transition-all duration-75 pointer-events-none"
      style={{ height: `${Math.max(scrollProgress, 2)}vh` }}
    >
      {/* The ribbon body */}
      <div className="w-full h-full bg-gradient-to-b from-amber-700 via-manuscript-gold to-yellow-500 shadow-[2px_0_15px_rgba(0,0,0,0.5)] border-l border-amber-600/30 clip-ribbon-tail relative">
        {/* Illumination line down the center */}
        <div className="absolute top-0 bottom-0 left-[calc(50%-1px)] w-[2px] bg-yellow-200/40" />
      </div>
    </div>
  );
};

export default ScrollRibbon;
