import React from 'react';
import { motion } from 'framer-motion';
import './FloatingOnyx.css';

const FloatingOnyx = () => {
  return (
    <div className="onyx-scene">
      {/* Ambient color lights */}
      <div className="ambient-light light-purple"></div>
      <div className="ambient-light light-blue"></div>
      <div className="ambient-light light-teal"></div>
      
      <motion.div 
        className="cube-perspective"
        animate={{ 
          rotateX: [25, 35, 25],
          rotateY: [0, 360],
        }}
        transition={{ 
          rotateY: { duration: 17.5, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <motion.div
          className="cube-float"
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="liquid-cube">
            <div className="face front">
              <div className="face-inner"></div>
              <div className="face-reflection"></div>
              <div className="face-edge edge-top"></div>
              <div className="face-edge edge-right"></div>
              <div className="face-edge edge-bottom"></div>
              <div className="face-edge edge-left"></div>
            </div>
            <div className="face back">
              <div className="face-inner"></div>
              <div className="face-reflection"></div>
            </div>
            <div className="face right">
              <div className="face-inner"></div>
              <div className="face-reflection"></div>
              <div className="face-edge edge-top"></div>
              <div className="face-edge edge-right"></div>
            </div>
            <div className="face left">
              <div className="face-inner"></div>
              <div className="face-reflection"></div>
            </div>
            <div className="face top">
              <div className="face-inner"></div>
              <div className="face-reflection"></div>
              <div className="face-edge edge-top"></div>
              <div className="face-edge edge-left"></div>
            </div>
            <div className="face bottom">
              <div className="face-inner"></div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floor reflection */}
      <div className="cube-shadow"></div>
    </div>
  );
};

export default FloatingOnyx;
