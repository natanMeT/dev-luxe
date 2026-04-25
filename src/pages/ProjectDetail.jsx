import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink, ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        <div style={{ textAlign: 'center' }}>
          <h2>הפרויקט לא נמצא</h2>
          <button onClick={() => navigate('/')} className="btn btn-primary" style={{ marginTop: '2rem' }}>חזרה לראשי</button>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-wrapper" dir="rtl" style={{ minHeight: '100vh', paddingTop: '100px', color: '#ffffff', paddingBottom: '5rem' }}>
      
      <div className="container">
        {/* Back navigation */}
        <button 
          onClick={() => navigate(-1)} 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            background: 'none', 
            border: 'none', 
            color: 'rgba(180, 190, 220, 0.8)', 
            cursor: 'pointer',
            fontSize: '1rem',
            marginBottom: '3rem',
            padding: 0
          }}
        >
          <ChevronRight size={20} />
          חזרה
        </button>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '4rem' }}
        >
          <span style={{ color: 'var(--color-gold)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
            {project.category}
          </span>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontFamily: "'Cormorant Garamond', serif", margin: '1rem 0 2rem 0', lineHeight: 1.1 }}>
            {project.name}
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(180, 190, 220, 0.8)', maxWidth: '800px', lineHeight: 1.8 }}>
            {project.description}
          </p>
        </motion.div>
      </div>

      {/* Massive Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{ width: '100%', height: '60vh', minHeight: '400px', background: `url(${project.image}) center/cover no-repeat`, marginBottom: '5rem' }}
      />

      <div className="container">
        {/* Details Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginBottom: '5rem' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 style={{ fontSize: '2rem', fontFamily: "'Cormorant Garamond', serif", color: 'var(--color-gold)', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
              המטרה
            </h3>
            <p style={{ color: 'rgba(180, 190, 220, 0.8)', lineHeight: 1.8, fontSize: '1.1rem' }}>
              {project.details.goal}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 style={{ fontSize: '2rem', fontFamily: "'Cormorant Garamond', serif", color: '#00d4aa', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
              כיוון עיצובי
            </h3>
            <p style={{ color: 'rgba(180, 190, 220, 0.8)', lineHeight: 1.8, fontSize: '1.1rem' }}>
              {project.details.designDirection}
            </p>
          </motion.div>

        </div>

        {/* Features & Tech Stack */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginBottom: '5rem', background: 'rgba(25, 25, 30, 0.5)', padding: '4rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#fff' }}>פיצ'רים מרכזיים</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {project.details.features.map((feature, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(180, 190, 220, 0.8)' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-gold)' }}></span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#fff' }}>טכנולוגיות</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {project.details.techStack.map((tech, idx) => (
                <span key={idx} style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50px', fontSize: '0.9rem', color: 'rgba(180, 190, 220, 0.9)' }}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Action */}
        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', padding: '1rem 3rem', fontSize: '1.2rem' }}
          >
            צפו באתר החי <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
