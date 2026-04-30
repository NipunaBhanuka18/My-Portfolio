'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Clock, User, Phone } from 'lucide-react';

export default function ContactTile() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      // Sri Lanka Time (UTC+5:30)
      const date = new Date();
      const localTime = new Date(date.toLocaleString('en-US', { timeZone: 'Asia/Colombo' }));
      const timeString = localTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
      setTime(timeString);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', height: '100%', justifyContent: 'center' }}>
      
      {/* Name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.05)', padding: '10px 15px', borderRadius: '10px' }}>
        <User size={18} color="var(--color-neon-accent)" />
        <span style={{ fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>Nipuna Bhanuka</span>
      </div>

      {/* Location */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.05)', padding: '10px 15px', borderRadius: '10px' }}>
        <MapPin size={18} color="var(--color-neon-accent)" />
        <span style={{ fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>Colombo, Sri Lanka (GMT+5:30)</span>
      </div>

      {/* Clock */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.05)', padding: '10px 15px', borderRadius: '10px' }}>
        <Clock size={18} color="var(--color-cyber-blue)" />
        <span style={{ fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>{time} Local Time</span>
        <span style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)', marginLeft: 'auto', background: 'rgba(0, 102, 204, 0.2)', padding: '2px 6px', borderRadius: '4px' }}>Remote Ready</span>
      </div>

      {/* Phone */}
      <a 
        href="tel:+94762864735"
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px', 
          background: 'rgba(255,255,255,0.05)', 
          padding: '10px 15px', 
          borderRadius: '10px',
          textDecoration: 'none'
        }}
      >
        <Phone size={18} color="var(--color-cyber-blue)" />
        <span style={{ fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>+94 76 286 4735</span>
      </a>

      {/* Email */}
      <a 
        href="mailto:bhanukakck2018@gmail.com"
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px', 
          background: 'var(--color-deep-navy)', 
          padding: '12px 15px', 
          borderRadius: '10px',
          border: '1px solid var(--color-glass-border)',
          transition: 'background 0.2s',
          textDecoration: 'none'
        }}
        onMouseOver={(e) => e.currentTarget.style.background = 'var(--color-cyber-blue)'}
        onMouseOut={(e) => e.currentTarget.style.background = 'var(--color-deep-navy)'}
      >
        <Mail size={18} />
        <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--color-text-primary)' }}>bhanukakck2018@gmail.com</span>
      </a>

    </div>
  );
}
