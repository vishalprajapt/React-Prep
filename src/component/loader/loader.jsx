'use client';
import React, { useEffect, useState } from 'react';

const Loader = ({ onDone }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 4700);
    const doneTimer = setTimeout(() => onDone(), 5000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-8
        bg-gradient-to-br from-[#07051a] via-[#0d0a2e] to-[#0a0820]
        transition-opacity duration-300
        ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      {/* Glow backdrop */}
      <div className="absolute w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="absolute w-52 h-52 rounded-full bg-blue-700/10 blur-2xl pointer-events-none" />

      {/* React Atom */}
      <ReactAtomBig />

      {/* Brand */}
      <div className="flex items-center gap-3 z-10">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50">
          <span className="text-white font-extrabold text-lg">R</span>
        </div>
        <span className="text-white font-extrabold text-2xl sm:text-3xl tracking-wide">ReactPrep</span>
      </div>

      <style>{`
        @keyframes orbitSpin1 {
          from { transform: rotate(0deg);   }
          to   { transform: rotate(360deg); }
        }
        @keyframes orbitSpin2 {
          from { transform: rotate(60deg);  }
          to   { transform: rotate(420deg); }
        }
        @keyframes orbitSpin3 {
          from { transform: rotate(120deg); }
          to   { transform: rotate(480deg); }
        }
      `}</style>
    </div>
  );
};

/* ── Big React Atom — orbits spin clockwise ── */
const ReactAtomBig = () => {
  const C   = 130;   // center
  const RX  = 118;   // orbit semi-major
  const RY  = 40;    // orbit semi-minor
  const SW  = 3.5;   // stroke width
  const CLR = '#22d3ee';
  const SIZE = 260;

  return (
    <div
      className="relative z-10"
      style={{ width: SIZE, height: SIZE }}
    >
      {/* ── Orbit 1 — clockwise ── */}
      <svg
        className="absolute inset-0"
        width={SIZE} height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        style={{ animation: 'orbitSpin1 2.6s linear infinite', transformOrigin: '50% 50%' }}
      >
        <ellipse cx={C} cy={C} rx={RX} ry={RY}
          fill="none" stroke={CLR} strokeWidth={SW} opacity="0.95" />
      </svg>

      {/* ── Orbit 2 — clockwise, 60° offset ── */}
      <svg
        className="absolute inset-0"
        width={SIZE} height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        style={{ animation: 'orbitSpin2 2.6s linear infinite', transformOrigin: '50% 50%' }}
      >
        <ellipse cx={C} cy={C} rx={RX} ry={RY}
          fill="none" stroke={CLR} strokeWidth={SW} opacity="0.95" />
      </svg>

      {/* ── Orbit 3 — clockwise, 120° offset ── */}
      <svg
        className="absolute inset-0"
        width={SIZE} height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        style={{ animation: 'orbitSpin3 2.6s linear infinite', transformOrigin: '50% 50%' }}
      >
        <ellipse cx={C} cy={C} rx={RX} ry={RY}
          fill="none" stroke={CLR} strokeWidth={SW} opacity="0.95" />
      </svg>

      {/* ── Nucleus — fixed center ── */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
          {/* Glow */}
          <circle cx="36" cy="36" r="34" fill="#22d3ee14" />
          <circle cx="36" cy="36" r="24" fill="#22d3ee20" />
          {/* Nucleus body */}
          <circle cx="36" cy="36" r="18" fill="#22d3ee" opacity="0.95" />
          <circle cx="36" cy="36" r="11" fill="#cffafe" />
          {/* Highlight */}
          <circle cx="30" cy="30" r="4.5" fill="white" opacity="0.75" />
        </svg>
      </div>
    </div>
  );
};

export default Loader;
