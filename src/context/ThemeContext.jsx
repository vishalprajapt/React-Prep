'use client';
// context/ThemeContext.jsx
// Shares dark/light mode across all routes via React Context.
// Persists preference to localStorage.

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({ dark: true, toggleDark: () => {} });

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true); // default dark

  // Hydrate from localStorage on client
  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored !== null) setDark(stored === 'dark');
    } catch {}
  }, []);

  const toggleDark = () => {
    setDark((prev) => {
      const next = !prev;
      try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch {}
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
