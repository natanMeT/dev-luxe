import React from 'react';
import { motion } from 'framer-motion';
import './FloatingOnyx.css';

const FloatingOnyx = () => {
  // Generate coordinates for a 3x3x3 grid (-1, 0, 1 for x, y, z)
  const miniCubes = [];
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        miniCubes.push({ x, y, z });
      }
    }
  }

  // Define the 6 faces for each mini-cube
  const faces = ['front', 'back', 'right', 'left', 'top', 'bottom'];

  return (
    <div className="onyx-scene">
      {/* Ambient color lights */}
      <div className="ambient-light light-purple"></div>
      <div className="ambient-light light-blue"></div>
      <div className="ambient-light light-teal"></div>
      
      <motion.div 
        className="cube-perspective"
        animate={{ 
          rotateX: [0, 360],
          rotateY: [0, 360],
          rotateZ: [0, 360]
        }}
        transition={{ 
          duration: 35, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <motion.div
          className="cube-float"
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="rubiks-cube">
            {[-1, 0, 1].map((y) => (
              <div key={`slice-${y}`} className={`cube-slice slice-${y === -1 ? 'top' : y === 0 ? 'middle' : 'bottom'}`}>
                {miniCubes.filter(c => c.y === y).map((pos, i) => {
                  const spacing = 105; 
                  const style = {
                    '--x': `${pos.x * spacing}px`,
                    '--y': `${pos.y * spacing}px`,
                    '--z': `${pos.z * spacing}px`,
                  };

                  return (
                    <div key={i} className="mini-cube" style={style}>
                      {faces.map((face) => (
                        <div key={face} className={`mini-face ${face}`}>
                          <div className="mini-face-inner"></div>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Floor reflection */}
      <div className="cube-shadow"></div>
    </div>
  );
};

export default FloatingOnyx;
