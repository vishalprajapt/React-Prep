import React from 'react';

const achievements = [
  { emoji: '🥇', bg: 'bg-blue-100',   bgDark: 'bg-blue-900/50',   title: 'First Steps',   desc: 'Complete 5 Questions' },
  { emoji: '🔥', bg: 'bg-purple-100', bgDark: 'bg-purple-900/50', title: 'Consistent',    desc: '7 Day Streak' },
  { emoji: '⚡', bg: 'bg-indigo-100', bgDark: 'bg-indigo-900/50', title: 'Quick Learner', desc: 'Score 80%+' },
  { emoji: '⚛️', bg: 'bg-pink-100',   bgDark: 'bg-pink-900/50',   title: 'React Master',  desc: 'Solve 100 Questions' },
];

const Achievement = ({ dark }) => {
  return (
    <div className={`rounded-2xl p-5 border transition-colors duration-300
      ${dark ? 'bg-[#0f0c29] border-indigo-900/60 shadow-sm' : 'bg-white border-gray-100 shadow-sm'}`}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className={`text-sm font-bold ${dark ? 'text-white' : 'text-gray-800'}`}>Achievements</h2>
        <button className="text-xs text-blue-500 font-medium hover:underline cursor-pointer">View all</button>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {achievements.map(({ emoji, bg, bgDark, title, desc }) => (
          <button key={title} className="flex flex-col items-center text-center gap-1 cursor-pointer group">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl sm:text-2xl
              group-hover:scale-110 transition-transform duration-200
              ${dark ? bgDark : bg}`}>
              {emoji}
            </div>
            <p className={`text-xs font-semibold leading-tight ${dark ? 'text-indigo-200' : 'text-gray-700'}`}>{title}</p>
            <p className={`text-xs leading-tight ${dark ? 'text-indigo-500' : 'text-gray-400'}`}>{desc}</p>
          </button>
        ))}
      </div>

      <div className="mt-4 bg-gradient-to-r from-indigo-900 to-purple-900 rounded-xl p-4 text-white">
        <p className="text-sm font-bold mb-1">You&apos;re doing amazing! 🚀</p>
        <p className="text-xs text-indigo-200 mb-3">Keep going and achieve your goals.</p>
        <button className="w-full bg-white text-indigo-700 text-xs font-bold py-2 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer">
          View Achievements
        </button>
      </div>
    </div>
  );
};

export default Achievement;
