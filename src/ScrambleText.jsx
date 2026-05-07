import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CHARS = '!<>-_\\\\/[]{}—=+*^?#________';

const ScrambleText = ({ text, delay = 0, style }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let frame = 0;
    const queue = [];
    
    // Create the queue of characters
    for (let i = 0; i < text.length; i++) {
      queue.push({
        from: CHARS[Math.floor(Math.random() * CHARS.length)],
        to: text[i],
        start: Math.floor(Math.random() * 40) + delay,
        end: Math.floor(Math.random() * 40) + delay + 20,
        char: ''
      });
    }

    let animationFrame;
    
    const update = () => {
      let output = '';
      let complete = 0;
      
      for (let i = 0; i < queue.length; i++) {
        let { from, to, start, end, char } = queue[i];
        
        if (frame >= end) {
          complete++;
          output += to;
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = CHARS[Math.floor(Math.random() * CHARS.length)];
            queue[i].char = char;
          }
          output += `<span style="opacity: 0.5">${char}</span>`;
        } else {
          output += `<span style="opacity: 0">${from}</span>`;
        }
      }
      
      setDisplayText(output);
      
      if (complete === queue.length) {
        cancelAnimationFrame(animationFrame);
      } else {
        frame++;
        animationFrame = requestAnimationFrame(update);
      }
    };
    
    // Start slightly delayed to allow for page load
    setTimeout(() => {
      animationFrame = requestAnimationFrame(update);
    }, 100);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [text, delay]);

  return (
    <motion.div 
      style={style}
      dangerouslySetInnerHTML={{ __html: displayText }}
    />
  );
};

export default ScrambleText;
