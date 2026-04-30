'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './BentoGrid.module.css';

import AutoPulseTile from './AutoPulseTile';
import PrimeShineTile from './PrimeShineTile';
import NslKddTile from './NslKddTile';
import AutomationStackTile from './AutomationStackTile';
import TechRadarTile from './TechRadarTile';
import BioTile from './BioTile';
import ContactTile from './ContactTile';

export default function BentoGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      className={styles.bentoContainer}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div variants={itemVariants} className={`${styles.tile} ${styles.bioTile} glass-panel`}>
        <BioTile />
      </motion.div>
      <motion.div variants={itemVariants} className={`${styles.tile} ${styles.featuredTile} glass-panel`}>
        <div className={styles.tileHeader}>
          <div className={styles.tileSubtitle}>Featured Project</div>
          <h2 className={styles.tileTitle}>Auto Pulse</h2>
        </div>
        <div className={styles.tileContent}>
          <AutoPulseTile />
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className={`${styles.tile} ${styles.productionTile} glass-panel`}>
        <div className={styles.tileHeader}>
          <div className={styles.tileSubtitle}>Production Project</div>
          <h2 className={styles.tileTitle}>Prime Shine CRM</h2>
        </div>
        <div className={styles.tileContent}>
          <PrimeShineTile />
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className={`${styles.tile} ${styles.researchTile} glass-panel`}>
        <div className={styles.tileHeader}>
          <div className={styles.tileSubtitle}>Research</div>
          <h2 className={styles.tileTitle}>NSL-KDD</h2>
        </div>
        <div className={styles.tileContent}>
          <NslKddTile />
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className={`${styles.tile} ${styles.automationTile} glass-panel`}>
        <div className={styles.tileHeader}>
          <div className={styles.tileSubtitle}>Workflow</div>
          <h2 className={styles.tileTitle}>Automation Stack</h2>
        </div>
        <div className={styles.tileContent}>
          <AutomationStackTile />
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className={`${styles.tile} ${styles.radarTile} glass-panel`}>
        <div className={styles.tileHeader}>
          <div className={styles.tileSubtitle}>Expertise</div>
          <h2 className={styles.tileTitle}>Tech Radar</h2>
        </div>
        <div className={styles.tileContent}>
          <TechRadarTile />
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className={`${styles.tile} ${styles.contactTile} glass-panel`}>
        <ContactTile />
      </motion.div>
    </motion.div>
  );
}
