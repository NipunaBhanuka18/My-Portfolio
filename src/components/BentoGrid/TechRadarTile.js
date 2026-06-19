'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TechRadarTile() {
  const skills = [
    { name: 'JavaScript / TypeScript', proficiency: 95, color: '#f7df1e' },
    { name: 'React & Next.js', proficiency: 92, color: '#61dafb' },
    { name: 'Python', proficiency: 90, color: '#3776ab' },
    { name: 'Machine Learning (Sklearn, PyTorch)', proficiency: 88, color: '#ff4b4b' },
    { name: 'SQL & PostgreSQL (pgvector)', proficiency: 85, color: '#336791' },
    { name: 'Node.js & Express', proficiency: 85, color: '#68a063' },
    { name: 'React Native (Expo)', proficiency: 80, color: '#00d8ff' },
    { name: 'Cloud DevOps', proficiency: 80, color: '#ff9900' },
    { name: 'GenAI & LangGraph', proficiency: 75, color: '#9b59b6' },
    { name: 'Docker', proficiency: 75, color: '#2496ed' },
  ];

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Container for the bars */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '24px 40px', 
        padding: '10px 0' 
      }}>
        {skills.map((skill, index) => (
          <div key={skill.name} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            
            {/* Label and Percentage */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--color-text-primary)' }}>
                {skill.name}
              </span>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: skill.color }}>
                {skill.proficiency}%
              </span>
            </div>
            
            {/* The Bar Background */}
            <div style={{ 
              width: '100%', 
              height: '8px', 
              background: 'rgba(255, 255, 255, 0.05)', 
              borderRadius: '4px', 
              overflow: 'hidden' 
            }}>
              {/* The Colorful Fill */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${skill.proficiency}%` }}
                transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeOut' }}
                style={{ 
                  height: '100%', 
                  background: skill.color,
                  borderRadius: '4px',
                  boxShadow: `0 0 10px ${skill.color}` 
                }}
              />
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
