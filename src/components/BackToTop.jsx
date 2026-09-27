import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

/** Appears once you've scrolled past the hero. */
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          whileHover={{ scale: 1.12, rotate: -8 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-[60] w-12 h-12 rounded-full grid place-items-center
            bg-[#19a7ce] text-black shadow-lg shadow-[#19a7ce]/30 hover:bg-yellow-400
            transition-colors"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
