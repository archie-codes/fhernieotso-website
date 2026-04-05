"use client";

import { useRef, useEffect, useState } from "react";
import { useSprings, animated } from "@react-spring/web";

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export const BlurText: React.FC<BlurTextProps> = ({ text, delay = 200, className = '' }) => {
  const words = text.split('');
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
      { threshold: 0.1, rootMargin: '-50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const springs = useSprings(
    words.length,
    words.map((_, i) => ({
      from: { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-50px,0)' },
      to: inView
        ? async (next: any) => {
            await next({ filter: 'blur(5px)', opacity: 0.5, transform: 'translate3d(0,20px,0)' });
            await next({ filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' });
          }
        : { filter: 'blur(10px)', opacity: 0 },
      delay: i * delay,
    }))
  );

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {springs.map((props, index) => (
        <animated.span key={index} style={props} className="inline-block whitespace-pre">
          {words[index] === ' ' ? '\u00A0' : words[index]}
        </animated.span>
      ))}
    </span>
  );
};
