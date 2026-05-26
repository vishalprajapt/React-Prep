import React from 'react';
import { BookOpen, CheckSquare, Trophy, Clock } from 'lucide-react';

const stats = [
  { icon: BookOpen,     iconBg: 'bg-purple-100', iconBgDark: 'bg-purple-900/50', iconColor: 'text-purple-600', iconColorDark: 'text-purple-400', value: '126', label: 'Notes Read',       change: '+8 this week' },
  { icon: CheckSquare,  iconBg: 'bg-green-100',  iconBgDark: 'bg-green-900/50',  iconColor: 'text-green-600',  iconColorDark: 'text-green-400',  value: '218', label: 'Questions Solved', change: '+18 this week' },
  { icon: Trophy,       iconBg: 'bg-yellow-100', iconBgDark: 'bg-yellow-900/50', iconColor: 'text-yellow-600', iconColorDark: 'text-yellow-400', value: '85%', label: 'Avg. Score',        change: '+7% this week' },
  { icon: Clock,        iconBg: 'bg-blue-100',   iconBgDark: 'bg-blue-900/50',   iconColor: 'text-blue-600',   iconColorDark: 'text-blue-400',   value: '42',  label: 'Hours Spent',      change: '+5 this week' },
];

const Dashboard = ({ dark }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {stats.map(({ icon: Icon, iconBg, iconBgDark, iconColor, iconColorDark, value, label, change }) => (
        <div
          key={label}
          className={`rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 border transition-colors duration-300
            ${dark
              ? 'bg-[#0f0c29] border-indigo-900/60 shadow-sm'
              : 'bg-white border-gray-100 shadow-sm'
            }`}
        >
          <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0 ${dark ? iconBgDark : iconBg}`}>
            <Icon size={18} className={dark ? iconColorDark : iconColor} />
          </div>
          <div className="min-w-0">
            <p className={`text-lg sm:text-xl font-extrabold leading-none ${dark ? 'text-white' : 'text-gray-900'}`}>{value}</p>
            <p className={`text-xs mt-0.5 truncate ${dark ? 'text-indigo-400' : 'text-gray-500'}`}>{label}</p>
            <p className="text-xs font-medium text-green-400 mt-0.5">↑ {change}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
