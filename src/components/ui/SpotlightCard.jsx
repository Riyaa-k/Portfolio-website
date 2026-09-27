import React, { useCallback, useRef } from 'react';

/**
 * Card that tracks the pointer and feeds its position to the CSS spotlight
 * gradient (see .spotlight-card in index.css). Pure CSS variables, so the
 * glow never triggers a React re-render.
 */
const SpotlightCard = ({ children, className = '', ...rest }) => {
  const ref = useRef(null);
  const frame = useRef(0);

  const handleMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    // Coalesce to one update per frame — mousemove fires far faster than paint.
    if (frame.current) return;
    const { clientX, clientY } = e;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${clientX - rect.left}px`);
      el.style.setProperty('--my', `${clientY - rect.top}px`);
    });
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`spotlight-card ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
