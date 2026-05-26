import React from 'react';
import { Play } from 'lucide-react';

const topics = [
  { title: 'useEffect',   subtitle: 'Explained',      questions: 12, gradient: 'from-blue-400 to-cyan-400',    bgLight: 'bg-blue-50',   bgDark: 'bg-blue-950/50',   textColor: 'text-blue-500',   borderDark: 'border-blue-900/40' },
  { title: 'Context API', subtitle: 'Deep Dive',       questions: 15, gradient: 'from-green-400 to-teal-400',   bgLight: 'bg-green-50',  bgDark: 'bg-green-950/50',  textColor: 'text-green-500',  borderDark: 'border-green-900/40' },
  { title: 'React Router',subtitle: 'Complete Guide',  questions: 10, gradient: 'from-purple-400 to-indigo-400',bgLight: 'bg-purple-50', bgDark: 'bg-purple-950/50', textColor: 'text-purple-500', borderDark: 'border-purple-900/40' },
  { title: 'Performance', subtitle: 'Optimization',    questions: 8,  gradient: 'from-pink-400 to-rose-400',    bgLight: 'bg-pink-50',   bgDark: 'bg-pink-950/50',   textColor: 'text-pink-500',   borderDark: 'border-pink-900/40' },
];

const Recommended = ({ dark }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className={`text-base font-bold ${dark ? 'text-white' : 'text-gray-800'}`}>
          ✨ Recommended for You
        </h2>
        <button className="text-sm text-blue-500 font-medium hover:underline cursor-pointer">View all</button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {topics.map(({ title, subtitle, questions, gradient, bgLight, bgDark, textColor, borderDark }) => (
          <div
            key={title}
            className={`rounded-xl p-4 flex flex-col justify-between min-h-[120px] sm:min-h-[130px] relative overflow-hidden border transition-colors duration-300 cursor-pointer
              ${dark ? `${bgDark} ${borderDark}` : bgLight}`}
          >
            <div className={`absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br ${gradient} opacity-20`} />
            <div>
              <p className={`font-bold text-sm sm:text-base ${textColor}`}>{title}</p>
              <p className={`text-xs mt-0.5 ${dark ? 'text-indigo-400' : 'text-gray-500'}`}>{subtitle}</p>
            </div>
            <div className="flex items-center justify-between mt-3">
              <span className={`text-xs ${dark ? 'text-indigo-400' : 'text-gray-500'}`}>{questions} Questions</span>
              <button className={`w-7 h-7 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center shadow cursor-pointer`}>
                <Play size={11} className="text-white ml-0.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
