import { useEffect, useRef } from 'react';

export default function useScrollAnimation(delay = 0) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${delay}ms`;
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // animate once
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay]);

  return ref;
}
