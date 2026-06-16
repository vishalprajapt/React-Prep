import React from 'react';
import {
  LayoutDashboard, HelpCircle, FileText, Dumbbell,
  BookOpen, Bookmark, Mic2, TrendingUp, Trophy,
  Settings, Rocket, ChevronDown, X,
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: HelpCircle,      label: 'Questions' },
  { icon: FileText,        label: 'Notes' },
  { icon: Dumbbell,        label: 'Practice', badge: 'New' },
  { icon: BookOpen,        label: 'Topics' },
  { icon: Bookmark,        label: 'Bookmarks' },
  { icon: Mic2,            label: 'Mock Interview' },
  { icon: TrendingUp,      label: 'Progress' },
  { icon: Trophy,          label: 'Achievements' },
  { icon: Settings,        label: 'Settings' },
];

const Sidebar = ({ dark, onClose, activePage = 'Dashboard', onNavigate }) => {
  return (
    <aside
      className={`w-52 h-screen flex flex-col border-r shrink-0 transition-colors duration-300
        ${dark ? 'bg-[#0a0820] border-indigo-900' : 'bg-white border-gray-100'}`}
    >
      {/* ── Logo (fixed top) ── */}
      <div className="flex items-center justify-between px-4 py-4 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          <span className="font-bold text-blue-500 text-lg">ReactPrep</span>
        </div>
        {/* Close — mobile only */}
        <button
          onClick={onClose}
          className={`lg:hidden p-1 rounded-lg cursor-pointer transition-colors
            ${dark ? 'text-indigo-300 hover:bg-indigo-900/50' : 'text-gray-500 hover:bg-gray-100'}`}
        >
          <X size={18} />
        </button>
      </div>

      {/* ── Nav (scrollable middle) ── */}
      <nav className="flex-1 overflow-y-auto px-2 py-1 flex flex-col gap-0.5
        scrollbar-thin scrollbar-thumb-indigo-800 scrollbar-track-transparent">
        {navItems.map(({ icon: Icon, label, badge }) => {
          const isActive = activePage === label;
          return (
            <button
              key={label}
              onClick={() => onNavigate && onNavigate(label)}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium
                transition-colors w-full text-left cursor-pointer
                ${isActive
                  ? 'bg-blue-600 text-white'
                  : dark
                    ? 'text-indigo-300 hover:bg-indigo-900/50'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              <Icon size={16} className="shrink-0" />
              <span className="truncate">{label}</span>
              {badge && (
                <span className="ml-auto text-xs bg-green-100 text-green-600 px-1.5 py-0.5 rounded-full font-semibold shrink-0">
                  {badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* ── Upgrade + User (fixed bottom) ── */}
      <div className="mx-3 pb-4 pt-3 shrink-0">
        <div className="bg-gradient-to-b from-indigo-900 to-purple-900 rounded-xl p-3 text-white text-center">
          <div className="flex justify-center mb-2">
            <Rocket size={26} className="text-yellow-300" />
          </div>
          <p className="font-bold text-sm">Upgrade to Pro</p>
          <p className="text-xs text-indigo-200 mt-1 mb-3">Unlock all premium features</p>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold py-2 rounded-lg transition-colors cursor-pointer">
            Go Premium ⚡
          </button>
        </div>

        {/* User */}
        <button className="flex items-center gap-2 mt-3 px-1 w-full cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden shrink-0">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=CodeMaster"
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0 text-left">
            <p className={`text-xs font-semibold truncate ${dark ? 'text-indigo-100' : 'text-gray-800'}`}>
              CodeMaster
            </p>
            <p className={`text-xs truncate ${dark ? 'text-indigo-400' : 'text-gray-400'}`}>
              Keep Learning 🔥
            </p>
          </div>
          <ChevronDown size={14} className={`shrink-0 ${dark ? 'text-indigo-400' : 'text-gray-400'}`} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
