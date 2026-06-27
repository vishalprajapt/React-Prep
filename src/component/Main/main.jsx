'use client';
import { useState, useEffect } from 'react';
import Sidebar          from '@/component/sidebar/sidebar';
import SearchBar        from '@/component/searchBar/searchBar';
import Banner           from '@/component/banner/banner';
import Dashboard        from '@/component/dashboard/dashboard';
import DailyGoal        from '@/component/dashboard/dailyGoal';
import ContinueLearning from '@/component/continueLenring/continueLenring';
import Recommended      from '@/component/recommended/recommended';
import ProgressFeatures from '@/component/progessFeatures/progessFeatures';
import Achievement      from '@/component/archivement/archivement';
import Loader           from '@/component/loader/loader';
import NotesPage        from '@/component/notes/index';
import QuestionsPage    from '@/component/questions/index';
import TopicsPage       from '@/component/topics/index';
import TopicDetail      from '@/component/topics/TopicDetail';
import AuthPage         from '@/component/auth/AuthPage';
import { isLoggedIn }   from '@/utils/loginUserData';

const Main = () => {
  const [dark, setDark]             = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading]       = useState(true);
  const [activePage, setActivePage] = useState('Dashboard');
  const [authed, setAuthed]         = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);

  // Check localStorage on first render (after loader)
  useEffect(() => {
    if (!loading) {
      setAuthed(isLoggedIn());
    }
  }, [loading]);

  const navigate = (page) => {
    setActivePage(page);
    setSelectedTopic(null); // reset topic detail on nav change
    setSidebarOpen(false);
  };

  // ── 1. Show loader first ─────────────────────────────────
  if (loading) return <Loader onDone={() => setLoading(false)} />;

  // ── 2. Not logged in → show Auth page ───────────────────
  if (!authed) {
    return (
      <AuthPage
        onLoginSuccess={() => setAuthed(true)}
      />
    );
  }

  // ── 3. Logged in → show dashboard ───────────────────────
  const renderPage = () => {
    switch (activePage) {
      case 'Notes':     return <NotesPage     dark={dark} />;
      case 'Questions': return <QuestionsPage dark={dark} />;
      case 'Topics':
        return selectedTopic
          ? <TopicDetail
              topic={selectedTopic}
              dark={dark}
              onBack={() => setSelectedTopic(null)}
              onQuestionSelect={(q) => console.log('Open question:', q)}
            />
          : <TopicsPage
              dark={dark}
              onTopicSelect={(t) => setSelectedTopic(t)}
            />;
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
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
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
          onLogout={() => setAuthed(false)}
        />
      </div>

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <SearchBar
          dark={dark}
          onToggleDark={() => setDark((d) => !d)}
          onMenuClick={() => setSidebarOpen(true)}
        />
        <div className="flex-1 overflow-y-auto">
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

export default Main;
