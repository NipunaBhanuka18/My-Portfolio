'use client';

import React from 'react';
import Image from 'next/image';
import { Dumbbell, Leaf } from 'lucide-react';

export default function BioTile() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', gap: '15px' }}>
      
      {/* Top Section: Avatar and Bio Text */}
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <div style={{ 
          width: '80px', 
          height: '80px', 
          borderRadius: '50%', 
          overflow: 'hidden', 
          border: '2px solid var(--color-glass-border)',
          flexShrink: 0
        }}>
          <Image 
            src="/avatar.png" 
            alt="The Engineer Avatar" 
            width={80} 
            height={80} 
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div style={{ fontStyle: 'italic', color: 'var(--color-text-primary)', fontSize: '0.95rem', lineHeight: 1.4 }}>
          "Driven by physical discipline and inspired by natural systems."
        </div>
      </div>

      {/* Bottom Section: Details */}
      <div style={{ display: 'flex', gap: '10px', flexGrow: 1 }}>
        
        {/* Fitness Card */}
        <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-neon-accent)' }}>
            <Dumbbell size={16} />
            <span style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>Discipline</span>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.4 }}>
            Consistency in training translates to integrity in code.
          </p>
        </div>

        {/* Nature Card */}
        <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#27c93f' }}>
            <Leaf size={16} />
            <span style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>Perspective</span>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.4 }}>
            Finding logic and elegant solutions outdoors.
          </p>
        </div>

      </div>

    </div>
  );
}
