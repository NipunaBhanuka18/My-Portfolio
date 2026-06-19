'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Database, Network, Search, CheckCircle2, XCircle } from 'lucide-react';

export default function SlRegulaAiTile() {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 5);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { id: 0, label: 'Query Rewrite', icon: <Network size={16} /> },
    { id: 1, label: 'pgvector Search', icon: <Database size={16} /> },
    { id: 2, label: 'CRAG Grader', icon: <Search size={16} /> },
    { id: 3, label: 'Validation', icon: <CheckCircle2 size={16} color="#27c93f" /> },
    { id: 4, label: 'Llama 3.1 70B', icon: <Network size={16} /> },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'flex-start' }}>
      
      {/* Project Title */}
      <div style={{ width: '100%', textAlign: 'left' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-text-primary)', margin: '0 0 5px 0' }}>SL-RegulaAI</h2>
        <div style={{ fontSize: '0.8rem', color: 'var(--color-neon-accent)', textTransform: 'uppercase', letterSpacing: '2px' }}>Enterprise Agentic RAG</div>
      </div>
      {/* Node Graph Animation */}
      <div style={{ 
        width: '100%', 
        flexGrow: 1, 
        background: 'rgba(0, 0, 0, 0.3)', 
        borderRadius: '12px', 
        border: '1px solid var(--color-glass-border)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Connecting Lines */}
        <svg style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}>
          <motion.path 
            d="M 50,50 L 150,50 L 250,50" 
            stroke="rgba(0, 240, 255, 0.2)" 
            strokeWidth="2" 
            fill="none" 
          />
          <motion.path 
            d="M 50,50 L 150,50 L 250,50" 
            stroke="var(--color-neon-accent)" 
            strokeWidth="2" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: activeNode > 0 ? 1 : 0,
              opacity: activeNode > 0 ? 1 : 0
            }}
            transition={{ duration: 0.5 }}
          />
        </svg>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', padding: '20px', zIndex: 1, justifyContent: 'center' }}>
          {nodes.map((node, index) => (
            <motion.div
              key={node.id}
              animate={{
                scale: activeNode === index ? 1.1 : 1,
                borderColor: activeNode === index ? 'var(--color-neon-accent)' : 'rgba(255,255,255,0.1)',
                boxShadow: activeNode === index ? '0 0 20px rgba(0, 240, 255, 0.3)' : 'none',
                background: activeNode === index ? 'rgba(0, 102, 204, 0.4)' : 'rgba(255,255,255,0.05)'
              }}
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.8rem',
                color: activeNode >= index ? '#fff' : 'var(--color-text-secondary)',
                transition: 'all 0.3s ease'
              }}
            >
              {node.icon}
              {node.label}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Description Text */}
      <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', textAlign: 'center' }}>
        Enterprise <strong style={{color:'var(--color-text-primary)'}}>Agentic RAG</strong> System. 
        Features <strong style={{color:'var(--color-text-primary)'}}>LangGraph CRAG routing</strong>, context-aware query rewriting, and deterministic hallucination prevention using <strong style={{color:'var(--color-text-primary)'}}>FastAPI & Neon pgvector</strong>.
      </div>

      {/* Tech Stack Pills */}
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {['LangGraph', 'FastAPI', 'Neon DB', 'Llama 3.1'].map(tech => (
          <span key={tech} style={{ 
            fontSize: '0.7rem', 
            padding: '4px 8px', 
            background: 'rgba(0, 240, 255, 0.1)', 
            color: 'var(--color-cyber-blue)',
            borderRadius: '4px',
            border: '1px solid rgba(0, 240, 255, 0.2)'
          }}>
            {tech}
          </span>
        ))}
      </div>

      {/* System Execution Logs */}
      <div style={{ 
        width: '100%', 
        background: '#050505', 
        borderRadius: '8px', 
        padding: '12px', 
        border: '1px solid rgba(0, 255, 0, 0.2)',
        fontFamily: 'monospace',
        fontSize: '0.7rem',
        color: '#27c93f',
        marginTop: '10px',
        boxShadow: 'inset 0 0 10px rgba(0,255,0,0.05)'
      }}>
        <div>&gt; [SYSTEM] Initializing Corrective RAG pipeline...</div>
        <div>&gt; [ROUTER] Query detected: Sri Lankan Tax Code Sec. 42</div>
        <div>&gt; [RETRIEVER] Searching pgvector embeddings... 3 chunks found.</div>
        <div>&gt; [GRADER] Evaluating document relevance... Pass.</div>
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          &gt; [LLM] Generating deterministic response_
        </motion.div>
      </div>

      {/* Repo Link (Coming Soon) */}
      <div style={{ 
        width: '100%',
        padding: '10px',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '8px',
        border: '1px dashed var(--color-glass-border)',
        textAlign: 'center',
        color: 'var(--color-text-secondary)',
        fontSize: '0.8rem',
        marginTop: '5px'
      }}>
        <strong style={{ color: 'var(--color-text-primary)' }}>Repository:</strong> Codebase will be published upon project completion.
      </div>

    </div>
  );
}
