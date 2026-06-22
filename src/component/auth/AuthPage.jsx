'use client';
// auth/AuthPage.jsx
// Full-page auth wrapper — header only, no sidebar.
// Shows LoginForm or SignupForm based on active tab.

import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import LoginForm  from './LoginForm';
import SignupForm from './SignupForm';

export default function AuthPage({ onLoginSuccess }) {
  const [dark, setDark]   = useState(true);
  const [tab, setTab]     = useState('login'); // 'login' | 'signup'

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300
        ${dark ? 'bg-[#07051a]' : 'bg-gray-50'}`}
    >
      {/* ── Header ─────────────────────────────────────────────────── */}
      <header
        className={`flex items-center justify-between px-4 sm:px-8 py-3 border-b transition-colors
          ${dark ? 'bg-[#0f0c29] border-indigo-900' : 'bg-white border-gray-100'}`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg
            flex items-center justify-center shrink-0">
            <span className="text-white font-extrabold text-sm">R</span>
          </div>
          <span className="font-bold text-blue-500 text-lg">ReactPrep</span>
        </div>

        {/* Dark mode toggle */}
        <button
          onClick={() => setDark((d) => !d)}
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer
            ${dark
              ? 'bg-indigo-900 hover:bg-indigo-800 text-yellow-300'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
          title={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {dark ? <Sun size={17} /> : <Moon size={17} />}
        </button>
      </header>

      {/* ── Auth Card ──────────────────────────────────────────────── */}
      <div className="flex-1 flex items-center justify-center px-4 py-10">
        <div
          className={`w-full max-w-sm rounded-2xl border p-6 sm:p-8 shadow-2xl transition-colors
            ${dark
              ? 'bg-[#0f0c29] border-indigo-900 shadow-indigo-950'
              : 'bg-white border-gray-200 shadow-gray-200'}`}
        >
          {/* Brand mark */}
          <div className="flex justify-center mb-5">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600
              rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <span className="text-white font-extrabold text-base">RP</span>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-6">
            <h1 className={`text-xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
              {tab === 'login' ? 'Sign In' : 'Create Account'}
            </h1>
            <p className={`text-xs mt-1 ${dark ? 'text-indigo-400' : 'text-gray-500'}`}>
              {tab === 'login'
                ? 'Access your React prep dashboard'
                : 'Join thousands of developers'}
            </p>
          </div>

          {/* Tab switcher */}
          <div
            className={`flex rounded-xl p-1 mb-6 ${dark ? 'bg-indigo-950/60' : 'bg-gray-100'}`}
          >
            {['login', 'signup'].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer
                  ${tab === t
                    ? 'bg-indigo-600 text-white shadow'
                    : dark ? 'text-indigo-400 hover:text-indigo-200' : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                {t === 'login' ? 'Sign In' : 'Sign Up'}
              </button>
            ))}
          </div>

          {/* Form */}
          {tab === 'login' ? (
            <LoginForm
              dark={dark}
              onSwitchToSignup={() => setTab('signup')}
              onLoginSuccess={onLoginSuccess}
            />
          ) : (
            <SignupForm
              dark={dark}
              onSwitchToLogin={() => setTab('login')}
              onLoginSuccess={onLoginSuccess}
            />
          )}

          {/* Footer links */}
          <div className={`flex justify-center gap-4 mt-6 text-xs
            ${dark ? 'text-indigo-700' : 'text-gray-400'}`}>
            <button className="hover:underline cursor-pointer">Terms of Service</button>
            <button className="hover:underline cursor-pointer">Privacy Policy</button>
          </div>
        </div>
      </div>
    </div>
  );
}
