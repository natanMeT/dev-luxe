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
      
      // Calculate responsive size. On mobile, it's smaller. On desktop, max 500px.
      const size = isMob ? Math.min(width * 0.9, 300) : 500;
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

  // Generate 3 horizontal paths (latitude lines)
  const paths = [];
  const lats = [25, 0, -25];
  lats.forEach((lat, index) => {
    const coords = [];
    for (let lng = -180; lng <= 180; lng += 1) { // 1-degree resolution for perfect circle
      coords.push([lat, lng, 0.01]);
    }
    paths.push({ 
      coords, 
      color: index % 2 === 0 ? ['#d4af37', '#00d4aa'] : ['#00d4aa', '#d4af37'] 
    });
  });

  // Generate 2 vertical paths (longitude lines)
  const lngs = [0, 90];
  lngs.forEach((lng, index) => {
    const coords = [];
    // Go up the front side
    for (let lat = -90; lat <= 90; lat += 1) { // 1-degree resolution
      coords.push([lat, lng, 0.01]);
    }
    // Go down the back side
    for (let lat = 90; lat >= -90; lat -= 1) { // 1-degree resolution
      coords.push([lat, lng === 0 ? 180 : -90, 0.01]);
    }
    paths.push({ 
      coords, 
      color: index === 0 ? ['#d4af37', '#0f3a28'] : ['#0f3a28', '#d4af37'] 
    });
  });

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
        
        // Path configuration for full rotation rings
        pathsData={paths}
        pathPoints="coords"
        pathPointLat={p => p[0]}
        pathPointLng={p => p[1]}
        pathPointAlt={p => p[2]}
        pathColor="color"
        // Use solid lines by setting dash length to 1 (100%) and gap to 0
        pathDashLength={1} 
        pathDashGap={0} 
        pathStroke={1.5}
        
        // Optional: Atmospheric glow
        atmosphereColor="#00d4aa"
        atmosphereAltitude={0.15}
      />
    </div>
  );
};

export default EarthGlobe;
