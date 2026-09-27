import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

/**
 * Subtle 3D tilt toward the pointer. Springs keep it from feeling twitchy,
 * and reduced-motion users get a static card.
 */
const TiltCard = ({ children, className = '', max = 12, ...rest }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springs = { stiffness: 220, damping: 18, mass: 0.6 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), springs);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), springs);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el || reduce) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  if (reduce) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 900, transformStyle: 'preserve-3d' }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;
