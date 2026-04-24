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
      globeEl.current.controls().autoRotateSpeed = 1.5;
      globeEl.current.controls().enableZoom = false; // Disable zoom so it doesn't mess up scrolling
      
      // Set initial point of view (looking at the middle east / europe)
      globeEl.current.pointOfView({ lat: 30, lng: 30, altitude: 2.2 });
    }
  }, []);

  // Center point (e.g., Tel Aviv / Global Hub)
  const HUB_LAT = 32.0853;
  const HUB_LNG = 34.7818;

  // Major global destinations
  const destinations = [
    { lat: 40.7128, lng: -74.0060, name: "New York" },
    { lat: 51.5074, lng: -0.1278, name: "London" },
    { lat: 35.6762, lng: 139.6503, name: "Tokyo" },
    { lat: -33.8688, lng: 151.2093, name: "Sydney" },
    { lat: 25.2048, lng: 55.2708, name: "Dubai" },
    { lat: 48.8566, lng: 2.3522, name: "Paris" },
    { lat: 1.3521, lng: 103.8198, name: "Singapore" },
    { lat: 34.0522, lng: -118.2437, name: "Los Angeles" },
    { lat: -23.5505, lng: -46.6333, name: "São Paulo" },
    { lat: 55.7558, lng: 37.6173, name: "Moscow" },
    { lat: -1.2921, lng: 36.8219, name: "Nairobi" }
  ];

  // Generate arcs connecting the hub to destinations
  const arcsData = destinations.map(dest => ({
    startLat: HUB_LAT,
    startLng: HUB_LNG,
    endLat: dest.lat,
    endLng: dest.lng,
    // Luxury gradient from Gold to Deep Teal
    color: ['#d4af37', '#00d4aa']
  }));

  // Create reverse arcs for incoming traffic
  const reverseArcsData = destinations.map(dest => ({
    startLat: dest.lat,
    startLng: dest.lng,
    endLat: HUB_LAT,
    endLng: HUB_LNG,
    color: ['#0f3a28', '#d4af37']
  }));

  const allArcs = [...arcsData, ...reverseArcsData];

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
        
        // Arc configuration for flight paths
        arcsData={allArcs}
        arcColor="color"
        arcDashLength={0.4}
        arcDashGap={0.2}
        arcDashAnimateTime={2500}
        arcStroke={1.5}
        
        // Optional: Atmospheric glow
        atmosphereColor="#00d4aa"
        atmosphereAltitude={0.15}
      />
    </div>
  );
};

export default EarthGlobe;
