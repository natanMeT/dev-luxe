import React from 'react';
import { motion } from 'framer-motion';

const FluxArchitecture = () => {
  const nodes = [
    { label: 'AI Visuals', top: '15%', left: '5%', delay: 0.1, color: '#00d4aa' },
    { label: 'CTA', top: '2%', left: '40%', delay: 0.3, color: '#d4af37' },
    { label: 'Hero', top: '15%', left: '75%', delay: 0.5, color: '#2d7aed' },
    { label: 'אסטרטגיה', top: '35%', left: '80%', delay: 0.2, color: '#d4af37' },
    { label: 'UX פרימיום', top: '55%', left: '70%', delay: 0.6, color: '#ffffff' },
    { label: 'Lead Form', top: '75%', left: '80%', delay: 0.4, color: '#00d4aa' },
    { label: 'Start Project', top: '85%', left: '40%', delay: 0.7, color: '#d4af37' },
    { label: '3D Motion', top: '80%', left: '10%', delay: 0.2, color: '#ffffff' },
    { label: 'לידים', top: '60%', left: '5%', delay: 0.5, color: '#d4af37' },
    { label: 'Gallery', top: '35%', left: '0%', delay: 0.8, color: '#2d7aed' },
  ];

  return (
    <div className="flux-architecture-wrapper">
      <div className="flux-architecture" style={{ position: 'relative', width: '100%', maxWidth: '500px', height: '500px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Central Core */}
        <motion.div 
          className="glass core-device"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ 
            width: '180px', 
            height: '320px', 
            borderRadius: '30px', 
            border: '1px solid rgba(212, 175, 55, 0.3)',
            background: 'linear-gradient(180deg, rgba(5,15,20,0.8) 0%, rgba(15,30,40,0.6) 100%)',
            backdropFilter: 'blur(15px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '2rem 1rem',
            boxShadow: '0 0 50px rgba(212, 175, 55, 0.1)',
            position: 'relative',
            zIndex: 5
          }}
        >
          <span style={{ color: 'var(--color-gold)', fontSize: '0.8rem', letterSpacing: '2px', fontWeight: 'bold' }}>FLUX CORE</span>
          
          {/* Abstract glowing center */}
          <div style={{ marginTop: '2.5rem', width: '40px', height: '40px', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.6) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%', boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)' }} />

          {/* Abstract lines inside core */}
          <div style={{ marginTop: '2rem', width: '80%', height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '10px' }} />
          <div style={{ marginTop: '0.8rem', width: '60%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px' }} />
          
          <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem', width: '100%', padding: '0 5px' }}>
            <div style={{ flex: 1, height: '30px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }} />
            <div style={{ flex: 1, height: '30px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }} />
          </div>
        </motion.div>

        {/* Orbiting Nodes */}
        {nodes.map((node, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{ y: [0, -8, 0] }}
            transition={{ 
              opacity: { duration: 0.8, delay: node.delay },
              scale: { duration: 0.8, delay: node.delay },
              y: { duration: 3 + (index % 3), repeat: Infinity, ease: "easeInOut", delay: node.delay }
            }}
            className="glass arch-node"
            style={{
              position: 'absolute',
              top: node.top,
              left: node.left,
              padding: '0.5rem 1rem',
              borderRadius: '50px',
              border: `1px solid ${node.color}40`,
              background: 'rgba(10, 15, 20, 0.7)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              zIndex: 10,
              whiteSpace: 'nowrap',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}
          >
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: node.color, boxShadow: `0 0 10px ${node.color}` }} />
            <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 500 }}>{node.label}</span>
          </motion.div>
        ))}

        {/* Subtle background glow */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, rgba(0,0,0,0) 60%)', zIndex: 1, pointerEvents: 'none' }} />
      </div>
    </div>
  );
};

export default FluxArchitecture;
