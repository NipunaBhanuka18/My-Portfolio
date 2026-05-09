'use client';

import React from 'react';
import Image from 'next/image';
import { Dumbbell, Leaf } from 'lucide-react';

export default function BioTile() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Image Layer */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("/lifestyle.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0,
        opacity: 0.85,
        filter: 'grayscale(100%) contrast(1.1)'
      }} />
      
      {/* Dark Gradient Overlay for Readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to bottom, rgba(10, 10, 15, 0) 0%, rgba(10, 10, 15, 0.3) 40%, rgba(10, 10, 15, 0.95) 100%)',
        zIndex: 1,
      }} />

      {/* Content Layer */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%', gap: '15px' }}>
        
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

    </div>
  );
}
