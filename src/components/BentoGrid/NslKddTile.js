'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function NslKddTile() {
  const matrix = [
    [98, 2],
    [5, 95]
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '15px' }}>
      <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', textAlign: 'center' }}>
        RandomForest Classification on 125k+ Logs
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px', alignItems: 'center' }}>
        {/* Y Axis Label */}
        <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontSize: '0.7rem', color: '#a0aec0' }}>
          Actual Class
        </div>
        
        {/* Matrix */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px' }}>
          {matrix.map((row, i) => (
            row.map((val, j) => (
              <motion.div
                key={`${i}-${j}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: (i * 2 + j) * 0.2, type: 'spring' }}
                style={{
                  width: '60px',
                  height: '60px',
                  background: val > 50 ? 'rgba(0, 102, 204, 0.8)' : 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '6px',
                  fontWeight: 600,
                  fontSize: '1.2rem',
                  color: val > 50 ? '#fff' : '#a0aec0'
                }}
              >
                {val}%
              </motion.div>
            ))
          ))}
        </div>
      </div>
      
      {/* X Axis Label */}
      <div style={{ fontSize: '0.7rem', color: '#a0aec0', paddingLeft: '20px' }}>
        Predicted Class
      </div>
    </div>
  );
}
