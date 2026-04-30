'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import styles from './AgentChat.module.css';

export default function AgentChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', content: "Hi! I'm Nipuna's AI assistant. Ask me anything about his projects or experience!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    // Name Capture Logic
    const nameMatch = userMessage.match(/(?:my name is|i am|i'm)\s+([a-zA-Z]+)/i);
    if (nameMatch && nameMatch[1]) {
      const extractedName = nameMatch[1].charAt(0).toUpperCase() + nameMatch[1].slice(1).toLowerCase();
      localStorage.setItem('userName', extractedName);
      window.dispatchEvent(new CustomEvent('userNameUpdated', { detail: extractedName }));
      
      setMessages(prev => [...prev, { role: 'ai', content: `Nice to meet you, ${extractedName}! I've updated the dashboard for you.` }]);
      return;
    }

    setIsLoading(true);

    try {
      const currentUserName = localStorage.getItem('userName') || 'Guest';

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, userName: currentUserName })
      });

      if (!response.ok) throw new Error('API Error');

      const data = await response.json();
      
      if (data.extractedName && data.extractedName !== currentUserName) {
        localStorage.setItem('userName', data.extractedName);
        window.dispatchEvent(new CustomEvent('userNameUpdated', { detail: data.extractedName }));
        setMessages(prev => [...prev, { role: 'ai', content: `Nice to meet you, ${data.extractedName}! I've updated the dashboard for you.` }]);
      } else {
        setMessages(prev => [...prev, { role: 'ai', content: data.reply }]);
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', content: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.chatContainer}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={styles.chatWindow}
          >
            <div className={styles.chatHeader}>
              <div className={styles.headerTitle}>
                <Bot size={20} color="var(--color-neon-accent)" />
                <span>Agentic Terminal</span>
              </div>
              <button onClick={() => setIsOpen(false)} className={styles.closeButton}>
                <X size={20} />
              </button>
            </div>
            
            <div className={styles.messagesArea}>
              {messages.map((msg, idx) => (
                <div key={idx} className={`${styles.message} ${msg.role === 'user' ? styles.userMessage : styles.aiMessage}`}>
                  {msg.content}
                </div>
              ))}
              {isLoading && (
                <div className={`${styles.message} ${styles.aiMessage}`}>
                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    ...
                  </motion.div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSend} className={styles.inputArea}>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Auto Pulse..."
                className={styles.chatInput}
                disabled={isLoading}
              />
              <button type="submit" className={styles.sendButton} disabled={isLoading || !input.trim()}>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className={styles.chatButton}
            onClick={() => setIsOpen(true)}
          >
            <MessageSquare size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
