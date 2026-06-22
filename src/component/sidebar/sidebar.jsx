'use client';
import { useState, useRef, useEffect } from 'react';
import {
  LayoutDashboard, HelpCircle, FileText, Dumbbell,
  BookOpen, Bookmark, Mic2, TrendingUp, Trophy,
  Settings, Rocket, ChevronDown, X, LogOut, User,
} from 'lucide-react';
import { getUserData, clearAuthData } from '@/utils/loginUserData';

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

/** First letter(s) avatar fallback */
const getInitials = (name = '') => {
  const parts = name.trim().split(' ');
  return parts.length >= 2
    ? (parts[0][0] + parts[1][0]).toUpperCase()
    : (parts[0]?.[0] ?? 'U').toUpperCase();
};

const Sidebar = ({ dark, onClose, activePage = 'Dashboard', onNavigate, onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Read user from localStorage
  const user = getUserData();
  const userName  = user?.name  || 'User';
  const userEmail = user?.email || '';
  const initials  = getInitials(userName);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleLogout = () => {
    setDropdownOpen(false);
    clearAuthData();
    onLogout?.();
  };

  return (
    <aside
      className={`w-52 h-screen flex flex-col border-r shrink-0 transition-colors duration-300
        ${dark ? 'bg-[#0a0820] border-indigo-900' : 'bg-white border-gray-100'}`}
    >
      {/* ── Logo ── */}
      <div className="flex items-center justify-between px-4 py-4 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          <span className="font-bold text-blue-500 text-lg">ReactPrep</span>
        </div>
        <button
          onClick={onClose}
          className={`lg:hidden p-1 rounded-lg cursor-pointer transition-colors
            ${dark ? 'text-indigo-300 hover:bg-indigo-900/50' : 'text-gray-500 hover:bg-gray-100'}`}
        >
          <X size={18} />
        </button>
      </div>

      {/* ── Nav (scrollable) ── */}
      <nav className="flex-1 overflow-y-auto px-2 py-1 flex flex-col gap-0.5">
        {navItems.map(({ icon: Icon, label, badge }) => {
          const isActive = activePage === label;
          return (
            <button
              key={label}
              onClick={() => onNavigate?.(label)}
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

      {/* ── Bottom: Upgrade + User ── */}
      <div className="mx-3 pb-4 pt-3 shrink-0">
        {/* Upgrade card */}
        <div className="bg-gradient-to-b from-indigo-900 to-purple-900 rounded-xl p-3 text-white text-center">
          <div className="flex justify-center mb-2">
            <Rocket size={24} className="text-yellow-300" />
          </div>
          <p className="font-bold text-sm">Upgrade to Pro</p>
          <p className="text-xs text-indigo-200 mt-1 mb-3">Unlock all premium features</p>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold py-2 rounded-lg transition-colors cursor-pointer">
            Go Premium ⚡
          </button>
        </div>

        {/* ── User profile + dropdown ── */}
        <div className="relative mt-3" ref={dropdownRef}>

          {/* Dropdown menu — opens upward */}
          {dropdownOpen && (
            <div
              className={`absolute bottom-full left-0 right-0 mb-2 rounded-xl border
                shadow-xl overflow-hidden z-50 transition-colors
                ${dark
                  ? 'bg-[#0f0c29] border-indigo-800 shadow-indigo-950'
                  : 'bg-white border-gray-200 shadow-gray-200'}`}
            >
              {/* User info header inside dropdown */}
              <div className={`px-3 py-2.5 border-b ${dark ? 'border-indigo-900' : 'border-gray-100'}`}>
                <p className={`text-xs font-bold truncate ${dark ? 'text-indigo-100' : 'text-gray-800'}`}>
                  {userName}
                </p>
                <p className={`text-xs truncate mt-0.5 ${dark ? 'text-indigo-500' : 'text-gray-400'}`}>
                  {userEmail}
                </p>
              </div>

              {/* Profile option */}
              <button
                className={`flex items-center gap-2.5 w-full px-3 py-2.5 text-xs font-medium
                  transition-colors cursor-pointer
                  ${dark
                    ? 'text-indigo-300 hover:bg-indigo-900/50'
                    : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <User size={13} />
                My Profile
              </button>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2.5 w-full px-3 py-2.5 text-xs font-medium
                  text-red-500 hover:bg-red-500/10 transition-colors cursor-pointer"
              >
                <LogOut size={13} />
                Log Out
              </button>
            </div>
          )}

          {/* Profile trigger button */}
          <button
            onClick={() => setDropdownOpen((v) => !v)}
            className={`flex items-center gap-2 px-2 py-1.5 w-full rounded-xl cursor-pointer
              transition-colors
              ${dark ? 'hover:bg-indigo-900/40' : 'hover:bg-gray-100'}`}
          >
            {/* Avatar — initials fallback */}
            <div className="w-8 h-8 rounded-full shrink-0 bg-gradient-to-br from-indigo-500 to-purple-600
              flex items-center justify-center text-white text-xs font-bold select-none">
              {initials}
            </div>

            <div className="flex-1 min-w-0 text-left">
              <p className={`text-xs font-semibold truncate ${dark ? 'text-indigo-100' : 'text-gray-800'}`}>
                {userName}
              </p>
              <p className={`text-xs truncate ${dark ? 'text-indigo-500' : 'text-gray-400'}`}>
                Keep Learning 🔥
              </p>
            </div>

            <ChevronDown
              size={13}
              className={`shrink-0 transition-transform duration-200
                ${dropdownOpen ? 'rotate-180' : ''}
                ${dark ? 'text-indigo-500' : 'text-gray-400'}`}
            />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
