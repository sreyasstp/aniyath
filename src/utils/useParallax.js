import { useEffect, useRef } from 'react';

export default function useParallax(speed = 0.3) {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const offset = window.scrollY * speed;
      ref.current.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
}
