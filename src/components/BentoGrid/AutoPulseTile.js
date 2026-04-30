'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AutoPulseTile() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
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
    </div>
  );
}
