import React from 'react';

const DailyGoal = ({ dark }) => {
  const solved = 7;
  const total = 10;
  const percent = (solved / total) * 100;
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className={`rounded-2xl p-5 border transition-colors duration-300
      ${dark ? 'bg-[#0f0c29] border-indigo-900/60 shadow-sm' : 'bg-white border-gray-100 shadow-sm'}`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-base">🎯</span>
          <h2 className={`text-sm font-bold ${dark ? 'text-white' : 'text-gray-800'}`}>Daily Goal</h2>
        </div>
        <button className="text-xs text-blue-500 font-medium hover:underline cursor-pointer">Edit Goal</button>
      </div>

      <div className="flex flex-col items-center">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r={radius} fill="none" stroke={dark ? '#1e1b4b' : '#f3f4f6'} strokeWidth="10" />
            <circle cx="60" cy="60" r={radius} fill="none" stroke="url(#goalGradient)"
              strokeWidth="10" strokeLinecap="round"
              strokeDasharray={circumference} strokeDashoffset={offset}
              className="transition-all duration-700"
            />
            <defs>
              <linearGradient id="goalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-xl sm:text-2xl font-extrabold ${dark ? 'text-white' : 'text-gray-900'}`}>
              {solved}
              <span className={`text-sm sm:text-base font-semibold ${dark ? 'text-indigo-400' : 'text-gray-400'}`}>/{total}</span>
            </span>
            <span className={`text-xs text-center leading-tight ${dark ? 'text-indigo-400' : 'text-gray-400'}`}>
              Questions<br />Solved
            </span>
          </div>
        </div>
        <p className={`text-sm font-semibold mt-3 ${dark ? 'text-indigo-200' : 'text-gray-700'}`}>
          Great job! Keep it up 🔥
        </p>
      </div>
    </div>
  );
};

export default DailyGoal;
