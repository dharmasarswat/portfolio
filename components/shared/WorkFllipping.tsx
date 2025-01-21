'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useState, useEffect, ReactNode } from 'react';

interface WordFlippingProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  words: Array<string | ReactNode>;
}

export default function WordFlipping({ words, ...props }: WordFlippingProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [words.length]);

  return (
    <div className={cn(props.className, 'inline')} {...props}>
      <motion.div
        key={currentWordIndex} // Change animation when the word changes
        initial={{ y: '30%', opacity: 0 }} // Start below and hidden
        animate={{ y: '0%', opacity: 1 }} // Animate to visible
        exit={{ y: '-100%', opacity: 0 }} // Exit above and hidden
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="inline-block"
      >
        {words[currentWordIndex]}
      </motion.div>
    </div>
  );
}
