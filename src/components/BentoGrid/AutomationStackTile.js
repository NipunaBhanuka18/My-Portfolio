'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Database, MessageCircle, Bot, Workflow } from 'lucide-react';

export default function AutomationStackTile() {
  const nodes = [
    { icon: <Workflow size={20} color="#ff6b6b" />, label: 'n8n' },
    { icon: <Database size={20} color="#3ecf8e" />, label: 'Supabase' },
    { icon: <MessageCircle size={20} color="#25D366" />, label: 'WhatsApp' },
    { icon: <Bot size={20} color="#8a2be2" />, label: 'Gemini AI' }
  ];

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* SVG Path connecting the nodes */}
      <svg style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: 0 }}>
        <motion.path 
          d="M 50 100 C 80 100, 120 50, 150 50 S 220 150, 250 150 S 280 100, 310 100" 
          fill="transparent" 
          stroke="var(--color-cyber-blue)" 
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', position: 'relative', zIndex: 1, padding: '0 10px' }}>
        {nodes.map((node, i) => (
          <motion.div 
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.3 }}
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '8px' 
            }}
          >
            <div style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              background: 'var(--color-deep-navy)', 
              border: '2px solid var(--color-glass-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 10px rgba(0,0,0,0.5)'
            }}>
              {node.icon}
            </div>
            <span style={{ fontSize: '0.7rem', fontWeight: 600 }}>{node.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
