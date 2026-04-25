import React, { useEffect, useState } from 'react';
import './PremiumBackground.css';

const PremiumBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate static random values for particles on mount
    const generatedParticles = Array.from({ length: 30 }).map((_, i) => {
      // Mix of emerald and gold particles
      const isEmerald = Math.random() > 0.7;
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${Math.random() * 3 + 1}px`,
        duration: `${Math.random() * 10 + 10}s`, // 10s to 20s
        delay: `${Math.random() * 10}s`,
        color: isEmerald ? '#00d4aa' : '#d4af37',
        opacity: Math.random() * 0.5 + 0.1
      };
    });
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="premium-bg-wrapper">
      <div className="bg-gradients" />
      <div className="bg-grid" />
      <div className="bg-sweep" />
      
      <div className="bg-particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              background: p.color,
              animationDuration: p.duration,
              animationDelay: p.delay,
              // Base opacity is handled in keyframes, but we can set box-shadow based on color
              boxShadow: `0 0 ${parseInt(p.size) * 2}px ${p.color}`,
            }}
          />
        ))}
      </div>

      <div className="bg-noise" />
    </div>
  );
};

export default PremiumBackground;
