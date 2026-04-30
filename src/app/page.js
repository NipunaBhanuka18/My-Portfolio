import React from 'react';
import Hero3D from '@/components/Hero3D';
import BentoGrid from '@/components/BentoGrid/BentoGrid';
import AgentChat from '@/components/AgentChat';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      <Hero3D />
      <BentoGrid />
      <AgentChat />
    </main>
  );
}
