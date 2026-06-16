'use client';
import React, { useState, useEffect } from 'react';
import Sidebar        from '@/component/sidebar/sidebar';
import SearchBar      from '@/component/searchBar/searchBar';
import Banner         from '@/component/banner/banner';
import Dashboard      from '@/component/dashboard/dashboard';
import DailyGoal      from '@/component/dashboard/dailyGoal';
import ContinueLearning from '@/component/continueLenring/continueLenring';
import Recommended    from '@/component/recommended/recommended';
import ProgressFeatures from '@/component/progessFeatures/progessFeatures';
import Achievement    from '@/component/archivement/archivement';
import Loader         from '@/component/loader/loader';
import NotesPage      from '@/component/notes/index';
import QuestionsPage  from '@/component/questions/index';
import TopicsPage     from '@/component/topics/index';
import axios from 'axios';

const Main = () => {
  const [dark, setDark]           = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading]     = useState(true);
  const [activePage, setActivePage] = useState('Dashboard');

  const navigate = (page) => {
    setActivePage(page);
    setSidebarOpen(false);
  };

  // ── API helpers (unchanged) ──────────────────────────────
  const createUser = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/users', {
        name: 'vivek saini',
        email: 'vivek@gmail.com',
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/users');
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/users/${id}`);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // deleteUser('6a171440322420bb1523c051');
  }, []);
  // ────────────────────────────────────────────────────────

  if (loading) return <Loader onDone={() => setLoading(false)} />;

  // ── Page renderer ────────────────────────────────────────
  const renderPage = () => {
    switch (activePage) {
      case 'Notes':     return <NotesPage     dark={dark} />;
      case 'Questions': return <QuestionsPage dark={dark} />;
      case 'Topics':    return <TopicsPage    dark={dark} />;
      default:
        return (
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 lg:p-5 flex flex-col xl:flex-row gap-4 lg:gap-5">
            {/* Center column */}
            <div className="flex-1 flex flex-col gap-4 lg:gap-5 min-w-0">
              <Banner dark={dark} />
              <Dashboard dark={dark} />
              <ContinueLearning dark={dark} onGoToNotes={() => navigate('Notes')} />
              <Recommended dark={dark} />
            </div>
            {/* Right column */}
            <div className="w-full xl:w-64 xl:shrink-0 flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-1 gap-4">
                <DailyGoal dark={dark} />
                <ProgressFeatures dark={dark} />
                <Achievement dark={dark} />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      className={`flex h-screen overflow-hidden font-sans transition-colors duration-300
        ${dark ? 'bg-[#07051a]' : 'bg-gray-50'}`}
    >
      {/* ── Mobile overlay ── */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ── Sidebar — fixed on mobile, sticky on desktop ── */}
      <div
        className={`fixed lg:sticky lg:top-0 inset-y-0 left-0 z-40 h-screen
          transition-transform duration-300 shrink-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <Sidebar
          dark={dark}
          onClose={() => setSidebarOpen(false)}
          activePage={activePage}
          onNavigate={navigate}
        />
      </div>

      {/* ── Main area (header + scrollable content) ── */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Header — always visible */}
        <SearchBar
          dark={dark}
          onToggleDark={() => setDark((d) => !d)}
          onMenuClick={() => setSidebarOpen(true)}
        />

        {/* Scrollable page content */}
        <div className="flex-1 overflow-y-auto">
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

export default Main;
