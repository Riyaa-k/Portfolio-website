import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/** Thin reading-progress bar pinned to the very top of the page. */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[70]
        bg-gradient-to-r from-[#19a7ce] via-[#7dd3fc] to-[#facc15]"
    />
  );
};

export default ScrollProgress;
