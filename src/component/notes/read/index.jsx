'use client';
// notes/read/index.jsx

import { useState } from 'react';
import { ChevronRight, Search, Bookmark, Clock } from 'lucide-react';
import { READ_QUESTIONS, DIFFICULTY_STYLES, READ_FILTERS } from './data';

export default function ReadPage({ dark, onBack }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch]             = useState('');
  const [expanded, setExpanded]         = useState({});

  const filtered = READ_QUESTIONS.filter((q) => {
    const matchFilter =
      activeFilter === 'All' ||
      q.difficulty === activeFilter ||
      q.tags.includes(activeFilter);
    const matchSearch =
      search === '' ||
      q.question.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const toggle = (id) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="flex-1 overflow-y-auto p-3 sm:p-5 flex flex-col gap-4">

      {/* ── Breadcrumb ── */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1 text-sm flex-wrap">
          <button
            onClick={() => onBack('notes')}
            className={`hover:underline cursor-pointer ${dark ? 'text-indigo-400' : 'text-gray-500'}`}
          >
            Notes
          </button>
          <ChevronRight size={13} className={dark ? 'text-indigo-700' : 'text-gray-400'} />
          <button
            onClick={() => onBack('notes')}
            className={`hover:underline cursor-pointer ${dark ? 'text-indigo-400' : 'text-gray-500'}`}
          >
            React Notes
          </button>
          <ChevronRight size={13} className={dark ? 'text-indigo-700' : 'text-gray-400'} />
          <span className={`font-semibold ${dark ? 'text-indigo-100' : 'text-gray-800'}`}>Read</span>
        </div>
        <span className={`text-sm font-medium shrink-0 ${dark ? 'text-indigo-400' : 'text-gray-500'}`}>
          {READ_QUESTIONS.length} questions
        </span>
      </div>

      {/* ── Search ── */}
      <div
        className={`flex items-center gap-2 rounded-xl px-4 py-2.5 border transition-colors
          ${dark ? 'bg-[#0f0c29] border-indigo-800' : 'bg-white border-gray-200'}`}
      >
        <Search size={15} className={`shrink-0 ${dark ? 'text-indigo-400' : 'text-gray-400'}`} />
        <input
          type="text"
          placeholder="Search questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={`bg-transparent outline-none text-sm w-full
            ${dark ? 'text-indigo-200 placeholder-indigo-600' : 'text-gray-700 placeholder-gray-400'}`}
        />
      </div>

      {/* ── Filter chips ── */}
      <div className="flex items-center gap-2 flex-wrap">
        {READ_FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border transition-colors cursor-pointer
              ${activeFilter === f
                ? 'bg-indigo-600 text-white border-indigo-600'
                : dark
                  ? 'border-indigo-800 text-indigo-300 hover:border-indigo-500'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-indigo-300'
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* ── Questions ── */}
      <div className="flex flex-col gap-3 pb-4">
        {filtered.length === 0 && (
          <p className={`text-center py-12 text-sm ${dark ? 'text-indigo-500' : 'text-gray-400'}`}>
            No questions found.
          </p>
        )}

        {filtered.map((q, idx) => {
          const dc     = DIFFICULTY_STYLES[q.difficulty];
          const isOpen = expanded[q.id];

          return (
            <div
              key={q.id}
              className={`rounded-xl border transition-colors
                ${dark ? 'bg-[#0f0c29] border-indigo-900' : 'bg-white border-gray-200'}`}
            >
              {/* Question header — click to expand answer */}
              <button
                onClick={() => toggle(q.id)}
                className="w-full text-left px-4 sm:px-5 pt-4 sm:pt-5 pb-3 cursor-pointer"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <p className={`text-xs mb-1.5 ${dark ? 'text-indigo-500' : 'text-gray-400'}`}>
                      Q{idx + 1} of {filtered.length}
                    </p>
                    <p className={`font-semibold text-sm sm:text-base leading-snug
                      ${dark ? 'text-indigo-100' : 'text-gray-800'}`}>
                      {q.question}
                    </p>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border shrink-0
                    ${dark ? dc.dark : dc.light}`}>
                    {q.difficulty}
                  </span>
                </div>
              </button>

              {/* Answer block */}
              <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                <div className={`rounded-lg p-3 sm:p-4 border-l-4 border-indigo-500
                  ${dark ? 'bg-indigo-950/50' : 'bg-indigo-50'}`}>
                  <p className="text-xs font-bold tracking-wider mb-2 text-indigo-500">ANSWER</p>
                  <p className={`text-sm leading-relaxed ${isOpen ? '' : 'line-clamp-2'}
                    ${dark ? 'text-indigo-200' : 'text-gray-700'}`}>
                    {q.answer}
                  </p>
                  <button
                    onClick={() => toggle(q.id)}
                    className="text-xs text-indigo-500 hover:text-indigo-400 mt-1.5 cursor-pointer font-medium"
                  >
                    {isOpen ? 'Show less' : 'Read more'}
                  </button>
                </div>

                {/* Tags + meta */}
                <div className="flex items-center gap-2 mt-3 flex-wrap">
                  {q.tags.map((tag) => (
                    <span key={tag}
                      className={`text-xs px-2.5 py-1 rounded-full border font-medium
                        ${dark
                          ? 'bg-indigo-900/40 border-indigo-800 text-indigo-300'
                          : 'bg-gray-100 border-gray-200 text-gray-600'}`}>
                      {tag}
                    </span>
                  ))}
                  <span className={`flex items-center gap-1 text-xs
                    ${dark ? 'text-indigo-500' : 'text-gray-400'}`}>
                    <Clock size={11} />{q.readTime}
                  </span>
                  <button className={`ml-auto p-1.5 rounded-lg transition-colors cursor-pointer
                    ${dark ? 'hover:bg-indigo-900/50 text-indigo-500' : 'hover:bg-gray-100 text-gray-400'}`}>
                    <Bookmark size={14} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
