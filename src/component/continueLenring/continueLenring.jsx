import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContinueLearning = ({ dark }) => {
  return (
    <div>
      <h2 className={`text-base font-bold mb-3 ${dark ? 'text-white' : 'text-gray-800'}`}>
        Continue Learning
      </h2>

      <div
        className={`relative rounded-2xl overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 py-5 gap-4
          ${dark
            ? 'bg-gradient-to-r from-[#0a0820] via-[#0f0c29] to-[#1a1060]'
            : 'bg-gradient-to-r from-gray-900 via-indigo-950 to-purple-900'
          }`}
      >
        {/* Left */}
        <div className="flex items-start sm:items-center gap-4 z-10 flex-1 min-w-0">
          <div className="w-11 h-11 sm:w-12 sm:h-12 bg-green-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-green-500/30">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="white" />
            </svg>
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-white font-bold text-sm sm:text-base">React Hooks</span>
              <span className="text-xs bg-yellow-400 text-yellow-900 font-semibold px-2 py-0.5 rounded-full">
                In Progress
              </span>
            </div>
            <p className="text-indigo-200 text-xs">
              Learn all about React Hooks and how they work under the hood.
            </p>
            <div className="mt-2.5">
              <div className="w-36 sm:w-48 h-1.5 bg-indigo-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-400 rounded-full" style={{ width: '68%' }} />
              </div>
              <p className="text-indigo-300 text-xs mt-1">68% Complete</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 sm:gap-6 z-10 self-end sm:self-auto">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center bg-indigo-800/60">
            <span className="text-3xl sm:text-4xl">👨‍💻</span>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-lg flex items-center gap-2 transition-colors shadow-lg shadow-blue-500/30 cursor-pointer whitespace-nowrap">
            Continue <ArrowRight size={15} />
          </button>
        </div>

        {/* Decorative */}
        <div className="absolute right-40 sm:right-52 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden sm:block">
          <svg width="70" height="70" viewBox="0 0 24 24" fill="white">
            <circle cx="12" cy="12" r="2.5" />
            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="white" strokeWidth="1" fill="none" />
            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="white" strokeWidth="1" fill="none" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="white" strokeWidth="1" fill="none" transform="rotate(120 12 12)" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ContinueLearning;
