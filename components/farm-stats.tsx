"use client";

import React, { useEffect, useState, useRef } from "react";
import { farmStats } from "@/lib/data";
import { Users, Leaf, Egg, Award } from "lucide-react";

function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return (
    <span ref={ref} className="tabular-nums tracking-tight">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function FarmStats() {
  const stats = [
    {
      icon: Award,
      label: "Years in Business",
      value: farmStats.yearsInBusiness,
      suffix: "+",
    },
    {
      icon: Users,
      label: "Chickens Raised",
      value: farmStats.chickensRaised,
      suffix: "+",
    },
    {
      icon: Egg,
      label: "Eggs Prod. Monthly",
      value: farmStats.eggsProducedMonthly,
      suffix: "+",
    },
    {
      icon: Leaf,
      label: "Sustainable Ops",
      value: farmStats.percentageSustainable,
      suffix: "%",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full relative z-10 divide-x-0 lg:divide-x divide-slate-100">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center text-center p-4 lg:p-8 group"
          >
            <div className="mb-6 bg-green-50 p-4 rounded-2xl text-green-600 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-green-100 transition-all duration-500">
              <Icon className="w-8 h-8" />
            </div>
            
            <div className="text-4xl lg:text-5xl font-black text-green-950 tracking-tight flex items-center mb-3">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
            </div>
            
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest max-w-[150px]">
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
