import React from 'react';
import { Search, Flame, Bell, Sun, Moon, Menu } from 'lucide-react';

const SearchBar = ({ dark, onToggleDark, onMenuClick }) => {
  return (
    <header
      className={`flex items-center justify-between px-3 sm:px-6 py-3 border-b transition-colors duration-300 sticky top-0 z-20
        ${dark ? 'bg-[#0f0c29] border-indigo-900' : 'bg-white border-gray-100'}`}
    >
      <div className="flex items-center gap-3">
        {/* Hamburger — mobile only */}
        <button
          onClick={onMenuClick}
          className={`lg:hidden p-2 rounded-lg cursor-pointer transition-colors
            ${dark ? 'text-indigo-300 hover:bg-indigo-900/50' : 'text-gray-600 hover:bg-gray-100'}`}
        >
          <Menu size={20} />
        </button>

        {/* Search box */}
        <div
          className={`flex items-center gap-2 rounded-lg px-3 py-2 border transition-colors
            w-40 sm:w-56 md:w-72 lg:w-80
            ${dark
              ? 'bg-indigo-950/60 border-indigo-700'
              : 'bg-gray-50 border-gray-200'
            }`}
        >
          <Search size={15} className={dark ? 'text-indigo-400 shrink-0' : 'text-gray-400 shrink-0'} />
          <input
            type="text"
            placeholder="Search questions, notes..."
            className={`bg-transparent text-sm outline-none w-full min-w-0
              ${dark ? 'text-indigo-200 placeholder-indigo-500' : 'text-gray-600 placeholder-gray-400'}`}
          />
          <span
            className={`text-xs px-1.5 py-0.5 rounded font-mono hidden sm:inline
              ${dark ? 'bg-indigo-800 text-indigo-300' : 'bg-gray-200 text-gray-400'}`}
          >
            ⌘K
          </span>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Streak — hidden on small screens */}
        <div className={`hidden sm:flex items-center gap-1.5 text-sm font-semibold ${dark ? 'text-indigo-200' : 'text-gray-700'}`}>
          <Flame size={18} className="text-orange-500" />
          <span className="hidden md:inline">7 Days Streak</span>
          <span className="md:hidden">7d</span>
        </div>

        {/* Notification */}
        <div className="relative">
          <button
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer
              ${dark ? 'bg-indigo-900 hover:bg-indigo-800' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            <Bell size={18} className={dark ? 'text-indigo-300' : 'text-gray-600'} />
          </button>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold pointer-events-none">
            2
          </span>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={onToggleDark}
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer
            ${dark
              ? 'bg-indigo-900 hover:bg-indigo-800 text-yellow-300'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
            }`}
          title={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
};

export default SearchBar;
