import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Button/anchor that leans toward the cursor as it approaches.
 */
const MagneticButton = ({ children, as = 'a', strength = 0.35, className = '', ...rest }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el || reduce) return;
    const rect = el.getBoundingClientRect();
    setOffset({
      x: (e.clientX - (rect.left + rect.width / 2)) * strength,
      y: (e.clientY - (rect.top + rect.height / 2)) * strength,
    });
  };

  const reset = () => setOffset({ x: 0, y: 0 });

  const MotionTag = motion[as] ?? motion.a;

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 260, damping: 18, mass: 0.5 }}
      whileTap={{ scale: 0.95 }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default MagneticButton;
