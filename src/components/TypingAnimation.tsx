import React from 'react';
import { motion } from 'framer-motion';

export default function TypingAnimation() {
  return (
    <div className="flex space-x-2 items-center h-6">
      {[1, 2, 3].map((dot) => (
        <motion.div
          key={dot}
          className="w-2 h-2 bg-gray-400 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: dot * 0.2,
          }}
        />
      ))}
    </div>
  );
}