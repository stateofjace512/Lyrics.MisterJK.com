"use client"; 

import React, { useEffect, useState } from "react";

export default function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  // Get current path
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  // Keep auto theme init (no visible toggle)
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const initialDark = saved ? saved === "dark" : mql.matches;

    setIsDark(initialDark);
    document.documentElement.classList.toggle("dark", initialDark);

    const handleChange = (e) => {
      if (!saved) {
        setIsDark(e.matches);
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };

    mql.addEventListener?.("change", handleChange);
    return () => mql.removeEventListener?.("change", handleChange);
  }, []);
  
  const getNavLinkClasses = () => {
    const baseClasses = "px-3 py-2 text-sm font-medium transition-colors duration-200";
    return `${baseClasses} text-gray-900 dark:text-gray-900 rainbow-text-hover`;
  };


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-white/80 backdrop-blur-md border-b border-white/40 dark:border-white/40 pointer-events-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="https://misterjk.com/" className="flex-shrink-0" aria-label="MRJK home">
            <img
              src="/favicon.png"
              alt="MRJK"
              className="h-16 w-16 object-contain"
              loading="eager"
              decoding="async"
            />
          </a>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <a href="https://misterjk.com" className={getNavLinkClasses()}>Home</a>
            <a href="https://misterjk.com/link" className={getNavLinkClasses()}>Listen</a>
            <a href="https://misterjk.com/bts" className={getNavLinkClasses()}>BTS</a>
            <a href="/" className={getNavLinkClasses()}>Lyrics</a>
            <a href="https://blog.misterjk.com" className={getNavLinkClasses()}>Blog</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
