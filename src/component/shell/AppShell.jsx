'use client';
// component/shell/AppShell.jsx
// Wraps every authenticated page: Sidebar + SearchBar + auth guard.
// Used by src/app/(app)/layout.jsx

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Sidebar   from '@/component/sidebar/sidebar';
import SearchBar from '@/component/searchBar/searchBar';
import Loader    from '@/component/loader/loader';
import AuthPage  from '@/component/auth/AuthPage';
import { useTheme } from '@/context/ThemeContext';
import { isLoggedIn } from '@/utils/loginUserData';

// Maps sidebar nav labels → URL paths
export const NAV_ROUTES = {
  Dashboard:        '/dashboard',
  Questions:        '/questions',
  Notes:            '/notes',
  Practice:         '/practice',
  Topics:           '/topics',
  Bookmarks:        '/bookmarks',
  'Mock Interview': '/mock-interview',
  Progress:         '/progress',
  Achievements:     '/achievements',
  Settings:         '/settings',
};

// Derive active sidebar label from current pathname
function getActivePage(pathname) {
  const entry = Object.entries(NAV_ROUTES).find(([, path]) =>
    pathname === path || pathname.startsWith(path + '/')
  );
  return entry ? entry[0] : 'Dashboard';
}

export default function AppShell({ children }) {
  const { dark, toggleDark } = useTheme();
  const router   = useRouter();
  const pathname = usePathname();

  const [loading,     setLoading]     = useState(true);
  const [authed,      setAuthed]      = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!loading) setAuthed(isLoggedIn());
  }, [loading]);

  const activePage = getActivePage(pathname);

  const handleNavigate = (label) => {
    const path = NAV_ROUTES[label];
    if (path) router.push(path);
    setSidebarOpen(false);
  };

  // ── 1. Loader ──────────────────────────────────────────
  if (loading) return <Loader onDone={() => setLoading(false)} />;

  // ── 2. Not authed → Auth page ──────────────────────────
  if (!authed) {
    return <AuthPage onLoginSuccess={() => setAuthed(true)} />;
  }

  // ── 3. Authed → render shell ───────────────────────────
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
          onNavigate={handleNavigate}
          onLogout={() => {
            setAuthed(false);
            router.push('/dashboard');
          }}
        />
      </div>

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <SearchBar
          dark={dark}
          onToggleDark={toggleDark}
          onMenuClick={() => setSidebarOpen(true)}
        />
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
