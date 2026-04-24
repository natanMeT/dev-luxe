import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import './EarthGlobe.css';

const EarthGlobe = () => {
  const globeEl = useRef();
  const [dimensions, setDimensions] = useState({ width: 500, height: 500 });
  const [isMobile, setIsMobile] = useState(false);

  // Resize handler for responsive globe
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isMob = width < 768;
      setIsMobile(isMob);
      
      // Calculate responsive size. On mobile, it's smaller. On desktop, max 700px.
      const size = isMob ? Math.min(width * 0.95, 350) : 700;
      setDimensions({ width: size, height: size });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
      // Auto-rotate
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 1.0; // Slowed down
      globeEl.current.controls().enableZoom = false; // Disable zoom so it doesn't mess up scrolling
      
      // Set initial point of view (looking at the middle east / europe)
      globeEl.current.pointOfView({ lat: 30, lng: 30, altitude: 2.2 });
    }
  }, []);

  return (
    <div className="globe-container">
      {/* Background glow to make it cinematic */}
      <div className="globe-glow"></div>
      
      <Globe
        ref={globeEl}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        
        // Optional: Atmospheric glow
        atmosphereColor="#00d4aa"
        atmosphereAltitude={0.15}
      />
    </div>
  );
};

export default EarthGlobe;
