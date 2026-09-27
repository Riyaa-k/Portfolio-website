import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Scroll-triggered reveal. Replaces the ScrollReveal library so every section
 * animates from one system, and so reduced-motion users get a plain fade.
 *
 * Wrap a group in <Reveal stagger> and its <Reveal.Item> children come in one
 * after another.
 */

const OFFSETS = {
  up: { y: 34, x: 0 },
  down: { y: -34, x: 0 },
  left: { x: 34, y: 0 },
  right: { x: -34, y: 0 },
  none: { x: 0, y: 0 },
};

const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  stagger = false,
  staggerDelay = 0.1,
  amount = 0.2,
  once = true,
  className = '',
  as = 'div',
  ...rest
}) => {
  const reduce = useReducedMotion();
  const offset = reduce ? OFFSETS.none : OFFSETS[direction] ?? OFFSETS.up;
  const MotionTag = motion[as] ?? motion.div;

  const variants = stagger
    ? {
        hidden: {},
        visible: {
          transition: { staggerChildren: reduce ? 0 : staggerDelay, delayChildren: delay },
        },
      }
    : {
        hidden: { opacity: 0, ...offset },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: reduce ? 0.2 : duration, delay, ease: EASE },
        },
      };

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

const Item = ({ children, direction = 'up', duration = 0.6, className = '', ...rest }) => {
  const reduce = useReducedMotion();
  const offset = reduce ? OFFSETS.none : OFFSETS[direction] ?? OFFSETS.up;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...offset },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: reduce ? 0.2 : duration, ease: EASE },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

Reveal.Item = Item;

export default Reveal;
