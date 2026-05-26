'use client';
import React from 'react';

const Banner = ({ dark }) => {
  return (
    <div
      className={`relative rounded-2xl flex flex-col sm:flex-row items-center overflow-hidden
        ${dark
          ? 'bg-gradient-to-br from-[#1a1060] via-[#1e1470] to-[#2d1f8a]'
          : 'bg-gradient-to-br from-[#eef0ff] via-[#e8e4ff] to-[#d8d0ff]'
        }`}
    >
      {/* ── LEFT TEXT ── */}
      <div className="flex flex-col justify-center px-6 sm:px-8 pt-7 pb-5 sm:py-7 z-10 w-full sm:w-[52%]">
        <p className={`text-sm font-medium mb-2 ${dark ? 'text-indigo-300' : 'text-gray-500'}`}>
          Hey CodeMaster! 👋
        </p>
        <h1 className={`text-2xl sm:text-[26px] font-extrabold leading-snug mb-2 ${dark ? 'text-white' : 'text-gray-900'}`}>
          Master <span className="text-blue-500">React</span>,<br />
          <span className="text-blue-500">Crack</span>{' '}
          <span className={dark ? 'text-white' : 'text-gray-900'}>Interviews</span>
        </h1>
        <p className={`text-sm leading-relaxed mb-5 ${dark ? 'text-indigo-300' : 'text-gray-500'}`}>
          Learn, practice and become the React expert you want to be.
        </p>
        <div className="flex items-center gap-3 flex-wrap">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2 transition-colors shadow-md shadow-blue-500/30 cursor-pointer whitespace-nowrap">
            Continue Learning →
          </button>
          <button
            className={`text-sm font-semibold px-5 py-2.5 rounded-xl border transition-colors cursor-pointer whitespace-nowrap
              ${dark
                ? 'border-indigo-400/40 text-indigo-200 hover:bg-indigo-800/40'
                : 'border-gray-300 text-gray-700 hover:bg-white/70 bg-white/40'
              }`}
          >
            Explore Topics
          </button>
        </div>
      </div>

      {/* ── RIGHT ILLUSTRATION ── */}
      <div className="flex-1 flex items-center justify-center py-5 sm:py-4 pr-0 sm:pr-4 w-full sm:w-auto">
        <ReactIllustration dark={dark} />
      </div>

      {/* Sparkles */}
      <PlusSpark style={{ top: 14, left: '48%' }} dark={dark} />
      <PlusSpark style={{ top: 18, right: '10%' }} dark={dark} large />
      <PlusSpark style={{ bottom: 16, left: '50%' }} dark={dark} />
      <PlusSpark style={{ bottom: 20, right: '20%' }} dark={dark} large />
    </div>
  );
};

/* ── Illustration ── */
const ReactIllustration = ({ dark }) => {
  return (
    <div className="relative w-[240px] sm:w-[280px] h-[170px] sm:h-[185px]">

      {/* React Atom */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[54%] z-20">
        <ReactAtomSVG dark={dark} />
      </div>

      {/* Platform base */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <div className={`w-[110px] h-[13px] rounded-full blur-lg opacity-80 -mb-1 ${dark ? 'bg-cyan-400' : 'bg-blue-300'}`} />
        <div className={`w-[125px] h-[19px] rounded-full ${dark ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600' : 'bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500'}`} />
        <div className={`w-[105px] h-[11px] rounded-b-full -mt-1 ${dark ? 'bg-indigo-800' : 'bg-indigo-700'} opacity-70`} />
      </div>

      {/* Card: </> — top left */}
      <div className="absolute z-30" style={{ top: 4, left: 8, transform: 'rotate(-8deg)' }}>
        <div
          className="w-[54px] h-[50px] rounded-[14px] flex items-center justify-center shadow-xl"
          style={{ background: 'linear-gradient(135deg, #1e2d4a 0%, #243558 100%)' }}
        >
          <span className="text-white font-bold text-base font-mono">&lt;/&gt;</span>
        </div>
      </div>

      {/* Card: lines — bottom left */}
      <div className="absolute z-30" style={{ bottom: 26, left: 0, transform: 'rotate(5deg)' }}>
        <div
          className="w-[60px] h-[54px] rounded-[14px] shadow-xl flex flex-col justify-center gap-[6px] px-3"
          style={{ background: dark ? 'rgba(140,120,220,0.85)' : 'rgba(180,168,240,0.92)' }}
        >
          <div className="w-[16px] h-[4px] rounded-full bg-yellow-400" />
          <div className="w-[28px] h-[4px] rounded-full bg-yellow-300 opacity-90" />
          <div className="w-[20px] h-[4px] rounded-full bg-yellow-400 opacity-80" />
        </div>
      </div>

      {/* Card: yellow notes — right */}
      <div className="absolute z-30" style={{ top: 20, right: 0, transform: 'rotate(6deg)' }}>
        <div
          className="w-[56px] h-[54px] rounded-[14px] shadow-xl flex flex-col justify-center gap-[6px] px-3"
          style={{ background: '#F5C842' }}
        >
          <div className="w-full h-[4px] rounded-full bg-yellow-700/40" />
          <div className="w-4/5 h-[4px] rounded-full bg-yellow-700/35" />
          <div className="w-3/5 h-[4px] rounded-full bg-yellow-700/40" />
        </div>
      </div>
    </div>
  );
};

/* ── React Atom SVG ── */
const ReactAtomSVG = ({ dark }) => {
  const orbit  = dark ? '#22d3ee' : '#06b6d4';
  const glow   = dark ? '#22d3ee40' : '#06b6d430';
  const nucleus = dark ? '#22d3ee' : '#0891b2';
  const inner  = dark ? '#cffafe' : '#e0f9ff';
  return (
    <svg width="96" height="96" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="28" fill={glow} />
      <circle cx="50" cy="50" r="18" fill={glow} />
      <ellipse cx="50" cy="50" rx="46" ry="16" stroke={orbit} strokeWidth="2.8" />
      <ellipse cx="50" cy="50" rx="46" ry="16" stroke={orbit} strokeWidth="2.8" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="46" ry="16" stroke={orbit} strokeWidth="2.8" transform="rotate(120 50 50)" />
      <circle cx="50" cy="50" r="9" fill={nucleus} />
      <circle cx="50" cy="50" r="5.5" fill={inner} />
      <circle cx="47.5" cy="47.5" r="2.2" fill="white" opacity="0.75" />
    </svg>
  );
};

/* ── Plus sparkle ── */
const PlusSpark = ({ style, dark, large }) => {
  const color = dark ? '#a5b4fc' : '#818cf8';
  const s = large ? 13 : 9;
  return (
    <svg width={s} height={s} viewBox="0 0 13 13" fill="none"
      className="absolute pointer-events-none" style={style}>
      <rect x="5.5" y="0" width="2" height="13" rx="1" fill={color} opacity="0.7" />
      <rect x="0" y="5.5" width="13" height="2" rx="1" fill={color} opacity="0.7" />
    </svg>
  );
};

export default Banner;
