"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when page is scrolled down 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial position in case the user reloads partway down
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-100 flex h-14 w-14 items-center justify-center rounded-full bg-green-600/90 text-white shadow-[0_8px_30px_rgb(16,185,129,0.3)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:bg-green-500 hover:shadow-[0_20px_40px_rgb(16,185,129,0.4)] focus:outline-none ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-16 opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-6 w-6 stroke-[2.5px]" />
    </button>
  );
}
