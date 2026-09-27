import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Shared section title: eyebrow, heading, and a rule that draws itself in
 * when the heading scrolls into view.
 */
const SectionHeading = ({ eyebrow, title, align = 'left', className = '' }) => {
  const reduce = useReducedMotion();
  const centered = align === 'center';

  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: reduce ? 0 : 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="block text-xs uppercase tracking-[0.25em] text-[#19a7ce] mb-3"
        >
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: reduce ? 0 : 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="text-3xl sm:text-4xl md:text-[2.5rem] font-semibold text-white tracking-tight"
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: centered ? 'center' : 'left' }}
        className={`h-[3px] w-20 rounded-full bg-gradient-to-r from-[#19a7ce] to-[#facc15] mt-4 ${
          centered ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
};

export default SectionHeading;
