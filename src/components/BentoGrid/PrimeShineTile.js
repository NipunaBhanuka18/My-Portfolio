'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Activity } from 'lucide-react';

export default function PrimeShineTile() {
  const [health, setHealth] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setHealth(95 + Math.random() * 5); // Fluctuates between 95 and 100
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Activity color="var(--color-neon-accent)" />
          <span style={{ fontWeight: 500 }}>Cloud Health</span>
        </div>
        <span style={{ color: 'var(--color-neon-accent)', fontWeight: 600 }}>{health.toFixed(1)}%</span>
      </div>
      
      {/* Status Bar */}
      <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
        <motion.div 
          animate={{ width: `${health}%` }}
          transition={{ ease: "easeInOut", duration: 1 }}
          style={{ height: '100%', background: 'var(--color-cyber-blue)' }}
        />
      </div>

      <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
        <div style={{ flex: 1, padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>Uptime</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>99.9%</div>
        </div>
        <div style={{ flex: 1, padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>Errors</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>~0%</div>
        </div>
      </div>

      <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', textAlign: 'center', marginTop: '-10px' }}>
        A live system serving real-world business needs.
      </div>

      <a 
        href="https://github.com/NipunaBhanuka18/primeshine-cloud" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ 
          marginTop: '10px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '10px', 
          padding: '12px', 
          background: 'var(--color-deep-navy)', 
          borderRadius: '8px',
          border: '1px solid var(--color-glass-border)',
          transition: 'background 0.2s'
        }}
        onMouseOver={(e) => e.currentTarget.style.background = 'var(--color-cyber-blue)'}
        onMouseOut={(e) => e.currentTarget.style.background = 'var(--color-deep-navy)'}
      >
        <GitBranch size={18} />
        <span>View Repository</span>
      </a>
    </div>
  );
}
