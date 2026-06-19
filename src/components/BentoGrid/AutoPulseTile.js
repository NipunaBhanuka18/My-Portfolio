'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AutoPulseTile() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'flex-start' }}>
      
      {/* Project Title */}
      <div style={{ width: '100%', textAlign: 'left', marginBottom: '10px' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-text-primary)', margin: '0 0 5px 0' }}>AutoPulse</h2>
        <div style={{ fontSize: '0.8rem', color: 'var(--color-neon-accent)', textTransform: 'uppercase', letterSpacing: '2px' }}>MERN & React Native Ecosystem</div>
      </div>
      
      <div style={{ display: 'flex', gap: '20px', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
      {/* Web Dashboard Mockup */}
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{
          width: '60%',
          height: '180px',
          background: 'rgba(0, 31, 63, 0.8)',
          borderRadius: '8px',
          border: '1px solid var(--color-glass-border)',
          display: 'flex',
          flexDirection: 'column',
          padding: '10px'
        }}
      >
        <div style={{ height: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '10px', display: 'flex', gap: '5px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }} />
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }} />
        </div>
        <div style={{ display: 'flex', gap: '10px', flexGrow: 1 }}>
          <div style={{ width: '30%', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }} />
          <div style={{ width: '70%', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '5px', padding: '5px' }}>
             <div style={{ height: '30%', background: 'rgba(0, 102, 204, 0.4)', borderRadius: '2px' }} />
             <div style={{ height: '70%', background: 'rgba(255,255,255,0.02)', borderRadius: '2px' }} />
          </div>
        </div>
      </motion.div>

      {/* Mobile App Mockup */}
      <motion.div 
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{
          width: '30%',
          height: '220px',
          background: '#000',
          borderRadius: '16px',
          border: '2px solid #333',
          padding: '5px',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div style={{ flexGrow: 1, background: 'rgba(0, 240, 255, 0.1)', borderRadius: '12px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
           <div style={{ width: '50%', height: '10px', background: 'rgba(255,255,255,0.2)', borderRadius: '5px', alignSelf: 'center', marginBottom: '10px' }} />
           <div style={{ height: '40px', background: 'rgba(0, 102, 204, 0.5)', borderRadius: '8px' }} />
           <div style={{ height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }} />
           <div style={{ height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }} />
        </div>
      </motion.div>
      </div>
      {/* Description Text */}
      <div style={{ marginTop: '5px', fontSize: '0.85rem', color: 'var(--color-text-secondary)', textAlign: 'center' }}>
        A complete ecosystem featuring a <strong style={{color:'var(--color-text-primary)'}}>MERN Web Dashboard</strong> and a <strong style={{color:'var(--color-text-primary)'}}>React Native (Expo) Mobile App</strong>.
      </div>
      
      <a 
        href="https://github.com/NipunaBhanuka18/Auto_Pulse_clientProject_SLIIT_Y2S2" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ 
          marginTop: '10px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '10px', 
          padding: '12px 24px', 
          background: 'var(--color-deep-navy)', 
          borderRadius: '8px',
          border: '1px solid var(--color-glass-border)',
          transition: 'background 0.2s',
          color: 'var(--color-text-primary)',
          textDecoration: 'none',
          fontSize: '0.9rem'
        }}
        onMouseOver={(e) => e.currentTarget.style.background = 'var(--color-cyber-blue)'}
        onMouseOut={(e) => e.currentTarget.style.background = 'var(--color-deep-navy)'}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        <span>View Repository</span>
      </a>
    </div>
  );
}
