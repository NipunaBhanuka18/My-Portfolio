'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function TechRadarTile() {
  const [hoveredNode, setHoveredNode] = useState(null);

  const skills = [
    { name: 'JavaScript', x: 20, y: 30, proficiency: 95 },
    { name: 'Python', x: -30, y: 40, proficiency: 90 },
    { name: 'SQL', x: -40, y: -20, proficiency: 85 },
    { name: 'Cloud DevOps', x: 40, y: -30, proficiency: 80 },
    { name: 'MERN', x: 60, y: 10, proficiency: 95 },
    { name: 'React Native', x: -60, y: 10, proficiency: 88 },
  ];

  return (
    <div style={{ position: 'relative', width: '100%', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Radar Circles */}
      <div style={{ position: 'absolute', width: '180px', height: '180px', borderRadius: '50%', border: '1px dashed rgba(255,255,255,0.1)' }} />
      <div style={{ position: 'absolute', width: '120px', height: '120px', borderRadius: '50%', border: '1px dashed rgba(255,255,255,0.2)' }} />
      <div style={{ position: 'absolute', width: '60px', height: '60px', borderRadius: '50%', border: '1px dashed rgba(255,255,255,0.3)' }} />
      
      {/* Radar Sweep Animation */}
      <motion.div 
        style={{
          position: 'absolute',
          width: '90px',
          height: '90px',
          background: 'conic-gradient(from 0deg, transparent 0%, rgba(0, 240, 255, 0.4) 100%)',
          borderRadius: '100% 0 0 0',
          transformOrigin: 'bottom right',
          top: '10px',
          left: '10px'
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {/* Center Point */}
      <div style={{ width: '8px', height: '8px', background: 'var(--color-neon-accent)', borderRadius: '50%', zIndex: 2 }} />

      {/* Nodes */}
      {skills.map((skill, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.1 }}
          onMouseEnter={() => setHoveredNode(skill.name)}
          onMouseLeave={() => setHoveredNode(null)}
          style={{
            position: 'absolute',
            left: `calc(50% + ${skill.x}px)`,
            top: `calc(50% + ${skill.y}px)`,
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer',
            zIndex: 3
          }}
        >
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: hoveredNode === skill.name ? 'var(--color-neon-accent)' : 'var(--color-cyber-blue)',
            boxShadow: hoveredNode === skill.name ? '0 0 10px var(--color-neon-accent)' : 'none',
            transition: 'all 0.2s'
          }} />
          
          <motion.div
            animate={{ opacity: hoveredNode === skill.name ? 1 : 0.7 }}
            style={{
              position: 'absolute',
              top: '-20px',
              left: '50%',
              transform: 'translateX(-50%)',
              whiteSpace: 'nowrap',
              fontSize: '0.7rem',
              fontWeight: hoveredNode === skill.name ? 700 : 500,
              color: hoveredNode === skill.name ? '#fff' : 'var(--color-text-secondary)',
              background: hoveredNode === skill.name ? 'var(--color-deep-navy)' : 'transparent',
              padding: hoveredNode === skill.name ? '2px 6px' : '0',
              borderRadius: '4px',
              border: hoveredNode === skill.name ? '1px solid var(--color-glass-border)' : 'none'
            }}
          >
            {skill.name} {hoveredNode === skill.name && `(${skill.proficiency}%)`}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
