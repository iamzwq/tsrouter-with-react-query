import { useState } from 'react';
import { motion } from 'motion/react';

export function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      style={{
        width: 200,
        height: 200,
        perspective: 1000,
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* 正面 */}
        <motion.div
          style={{
            position: 'absolute',
            backfaceVisibility: 'hidden',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(45deg, #ff8a00, #e52e71)',
          }}
        />

        {/* 背面 */}
        <motion.div
          style={{
            position: 'absolute',
            backfaceVisibility: 'hidden',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(45deg, #00c6ff, #0072ff)',
            rotateY: 180,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
