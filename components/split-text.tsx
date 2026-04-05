"use client";

import { useSprings, animated } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const SplitText: React.FC<SplitTextProps> = ({ text, className = '', delay = 35 }) => {
  const words = text.split(' ').map(word => word.split(''));
  const totalLetters = words.reduce((acc, word) => acc + word.length, 0);

  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '-30px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const springs = useSprings(
    totalLetters,
    Array.from({ length: totalLetters }).map((_, i) => ({
      from: { opacity: 0, transform: 'translate3d(0,30px,0)' },
      to: inView
        ? { opacity: 1, transform: 'translate3d(0,0,0)' }
        : { opacity: 0, transform: 'translate3d(0,30px,0)' },
      delay: i * delay,
      config: { mass: 1, tension: 150, friction: 25 }, // Extremely smooth, no bounce
    }))
  );

  let indexCounter = 0;

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.map((letter, letterIndex) => {
            const index = indexCounter++;
            return (
              <animated.span
                key={letterIndex}
                style={{
                  ...springs[index],
                  willChange: 'transform, opacity',
                }}
                className="inline-block"
              >
                {letter}
              </animated.span>
            );
          })}
        </span>
      ))}
    </span>
  );
};
