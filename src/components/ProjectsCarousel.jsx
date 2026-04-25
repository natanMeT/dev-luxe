import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProjectsCarousel = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(Math.floor(projects.length / 2));
  const navigate = useNavigate();

  const handleCardClick = (index, projectId) => {
    if (index === activeIndex) {
      // Navigate if clicking the center (active) card
      navigate(`/projects/${projectId}`);
    } else {
      // Bring clicked card to center
      setActiveIndex(index);
    }
  };

    const getCardStyles = (index) => {
      const offset = index - activeIndex;
      const absOffset = Math.abs(offset);
      
      // Base calculations for the arc/coverflow effect
      const rotateY = offset === 0 ? 0 : offset < 0 ? 35 : -35;
      
      // Responsive X spread based on screen size (estimate)
      const spread = typeof window !== 'undefined' && window.innerWidth < 768 ? 80 : 160;
      const x = offset * spread; 
      
      // Vertical drop to create an arc (smile curve)
      const y = absOffset * 40; 
      
      const scale = offset === 0 ? 1 : Math.max(0.6, 1 - (absOffset * 0.15));
      const opacity = offset === 0 ? 1 : Math.max(0.1, 1 - (absOffset * 0.4));
      const zIndex = 100 - absOffset;
      
      return { x, y, rotateY, scale, opacity, zIndex };
    };

  return (
    <div 
      className="carousel-container" 
      style={{ 
        width: '100%', 
        height: '600px', 
        position: 'relative', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        perspective: '1200px',
        overflow: 'hidden',
        padding: '2rem 0'
      }}
    >
      {projects.map((project, index) => {
        const { x, y, rotateY, scale, opacity, zIndex } = getCardStyles(index);
        const isActive = index === activeIndex;

        return (
          <motion.div
            key={project.id}
            onClick={() => handleCardClick(index, project.id)}
            initial={false}
            animate={{
              x,
              y,
              rotateY,
              scale,
              opacity,
              zIndex
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              mass: 1
            }}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              margin: '0 auto',
              width: 'clamp(280px, 40vw, 450px)',
              height: 'clamp(350px, 50vw, 550px)',
              borderRadius: '24px',
              cursor: isActive ? 'pointer' : 'grab',
              transformStyle: 'preserve-3d',
              // Liquid glass aesthetics
              background: `url(${project.image}) center/cover no-repeat`,
              boxShadow: isActive 
                ? '0 30px 60px rgba(0,0,0,0.6), 0 0 40px rgba(212,175,55,0.1)' 
                : '0 10px 30px rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            {/* Glassmorphism Title Overlay - Only visible when active or subtly on hover */}
            <motion.div 
              animate={{ opacity: isActive ? 1 : 0 }}
              style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                padding: '2rem 1.5rem 1.5rem',
                background: 'linear-gradient(to top, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0.4) 60%, transparent 100%)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderBottomLeftRadius: '24px',
                borderBottomRightRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                pointerEvents: 'none'
              }}
            >
              <span style={{ color: 'var(--color-gold)', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                {project.category}
              </span>
              <h3 style={{ margin: 0, color: '#fff', fontSize: '1.8rem', fontFamily: "'Cormorant Garamond', serif" }}>
                {project.name}
              </h3>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProjectsCarousel;
