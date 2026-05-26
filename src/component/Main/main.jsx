'use client';
import React, { useState } from 'react';
import Sidebar from '@/component/sidebar/sidebar';
import SearchBar from '@/component/searchBar/searchBar';
import Banner from '@/component/banner/banner';
import Dashboard from '@/component/dashboard/dashboard';
import DailyGoal from '@/component/dashboard/dailyGoal';
import ContinueLearning from '@/component/continueLenring/continueLenring';
import Recommended from '@/component/recommended/recommended';
import ProgressFeatures from '@/component/progessFeatures/progessFeatures';
import Achievement from '@/component/archivement/archivement';

const Main = () => {
  const [dark, setDark] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className={`flex min-h-screen font-sans transition-colors duration-300
        ${dark ? 'bg-[#07051a]' : 'bg-gray-50'}`}
    >
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar — hidden on mobile, slide in on toggle */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-40 transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <Sidebar dark={dark} onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Search Bar */}
        <SearchBar
          dark={dark}
          onToggleDark={() => setDark((d) => !d)}
          onMenuClick={() => setSidebarOpen(true)}
        />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 lg:p-5 flex flex-col xl:flex-row gap-4 lg:gap-5">

          {/* Center Column */}
          <div className="flex-1 flex flex-col gap-4 lg:gap-5 min-w-0">
            <Banner dark={dark} />
            <Dashboard dark={dark} />
            <ContinueLearning dark={dark} />
            <Recommended dark={dark} />
          </div>

          {/* Right Column — full width on mobile, fixed width on xl */}
          <div className="w-full xl:w-64 xl:shrink-0 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-1 gap-4">
              <DailyGoal dark={dark} />
              <ProgressFeatures dark={dark} />
              <Achievement dark={dark} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Main;
