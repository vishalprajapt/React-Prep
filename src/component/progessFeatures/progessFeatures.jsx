import React from 'react';

const progressData = [
  { label: 'React Basics',   percent: 90, color: 'bg-blue-500',   icon: '⚛️' },
  { label: 'React Hooks',    percent: 68, color: 'bg-green-500',  icon: '🪝' },
  { label: 'Redux',          percent: 45, color: 'bg-purple-500', icon: '🔄' },
  { label: 'Next.js',        percent: 30, color: 'bg-gray-500',   icon: 'N' },
  { label: 'Advanced React', percent: 20, color: 'bg-red-400',    icon: '🚀' },
];

const ProgressFeatures = ({ dark }) => {
  return (
    <div className={`rounded-2xl p-5 border transition-colors duration-300
      ${dark ? 'bg-[#0f0c29] border-indigo-900/60 shadow-sm' : 'bg-white border-gray-100 shadow-sm'}`}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className={`text-sm font-bold ${dark ? 'text-white' : 'text-gray-800'}`}>Your Progress</h2>
        <button className="text-xs text-blue-500 font-medium hover:underline cursor-pointer">View Details</button>
      </div>

      <div className="flex flex-col gap-3">
        {progressData.map(({ label, percent, color, icon }) => (
          <div key={label} className="flex items-center gap-3">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0
              ${dark ? 'bg-indigo-900/60' : 'bg-gray-100'}`}>
              {icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs font-medium truncate ${dark ? 'text-indigo-200' : 'text-gray-700'}`}>{label}</span>
                <span className={`text-xs font-semibold ml-2 shrink-0 ${dark ? 'text-indigo-400' : 'text-gray-500'}`}>{percent}%</span>
              </div>
              <div className={`w-full h-1.5 rounded-full overflow-hidden ${dark ? 'bg-indigo-900/60' : 'bg-gray-100'}`}>
                <div className={`h-full ${color} rounded-full transition-all duration-500`} style={{ width: `${percent}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressFeatures;
