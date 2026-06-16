'use client';
// questions/index.jsx

import { useState } from 'react';
import { Bookmark, BookmarkCheck, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { QUESTIONS, DIFFICULTY_DOT, STATUS_STYLES, FILTERS } from './data';

const TOTAL   = QUESTIONS.length;
const SOLVED  = QUESTIONS.filter((q) => q.status === 'Solved').length;
const AVG_SCORE = 85;

export default function QuestionsPage({ dark }) {
  const [activeFilter, setActiveFilter]   = useState('All');
  const [bookmarks, setBookmarks]         = useState(() => {
    const m = {};
    QUESTIONS.forEach((q) => { m[q.id] = q.bookmarked; });
    return m;
  });

  const toggleBookmark = (id) =>
    setBookmarks((prev) => ({ ...prev, [id]: !prev[id] }));

  const filtered = QUESTIONS.filter((q) => {
    if (activeFilter === 'Bookmarked') return bookmarks[q.id];
    if (activeFilter === 'All')        return true;
    return q.difficulty === activeFilter;
  });

  return (
    <div className="flex-1 overflow-y-auto p-3 sm:p-5 flex flex-col gap-4">

      {/* ── Page heading ── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <h1 className={`text-xl sm:text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
            Questions
          </h1>
          <p className={`text-sm mt-0.5 ${dark ? 'text-indigo-400' : 'text-gray-500'}`}>
            {TOTAL} total &middot; {SOLVED} solved &middot; {AVG_SCORE}% avg. score
          </p>
        </div>
      </div>

      {/* ── Filters + Sort row ── */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Filter chips */}
        <div className="flex items-center gap-2 flex-wrap">
          {FILTERS.map((f) => (
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

        {/* Filter + Sort buttons */}
        <div className="flex items-center gap-2">
          <button
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs sm:text-sm font-medium transition-colors cursor-pointer
              ${dark
                ? 'border-indigo-800 text-indigo-300 hover:bg-indigo-900/40'
                : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}
          >
            <SlidersHorizontal size={13} /> Filter
          </button>
          <button
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs sm:text-sm font-medium transition-colors cursor-pointer
              ${dark
                ? 'border-indigo-800 text-indigo-300 hover:bg-indigo-900/40'
                : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}
          >
            <ArrowUpDown size={13} /> Sort
          </button>
        </div>
      </div>

      {/* ── Questions list ── */}
      <div className="flex flex-col gap-2 pb-4">
        {filtered.length === 0 && (
          <p className={`text-center py-12 text-sm ${dark ? 'text-indigo-500' : 'text-gray-400'}`}>
            No questions found.
          </p>
        )}

        {filtered.map((q, idx) => {
          const ss         = STATUS_STYLES[q.status];
          const dotColor   = DIFFICULTY_DOT[q.difficulty];
          const isBookmark = bookmarks[q.id];

          return (
            <div
              key={q.id}
              className={`flex items-center gap-3 sm:gap-4 rounded-xl border px-3 sm:px-5 py-3 sm:py-4
                transition-colors cursor-pointer group
                ${dark
                  ? 'bg-[#0f0c29] border-indigo-900 hover:border-indigo-700'
                  : 'bg-white border-gray-100 hover:border-indigo-200 shadow-sm'}`}
            >
              {/* Number */}
              <span className={`text-xs sm:text-sm font-mono font-semibold w-6 shrink-0 text-center
                ${dark ? 'text-indigo-600' : 'text-gray-400'}`}>
                {String(idx + 1).padStart(2, '0')}
              </span>

              {/* Difficulty dot */}
              <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${dotColor}`} />

              {/* Title + tags */}
              <div className="flex-1 min-w-0">
                <p className={`text-sm sm:text-base font-medium leading-snug
                  ${dark ? 'text-indigo-100' : 'text-gray-800'}`}>
                  {q.title}
                </p>
                <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                  {q.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-0.5 rounded-full font-medium
                        ${dark
                          ? 'bg-indigo-900/50 text-indigo-300'
                          : 'bg-gray-100 text-gray-600'}`}
                    >
                      {tag}
                    </span>
                  ))}
                  {/* Status badge */}
                  {q.status === 'New' ? (
                    <span className={dark ? ss.dark : ss.light}>{ss.label}</span>
                  ) : (
                    <span className={`text-xs font-semibold ${dark ? ss.dark : ss.light}`}>
                      {ss.label}
                    </span>
                  )}
                </div>
              </div>

              {/* Difficulty label — hidden on xs */}
              <span className={`hidden sm:inline text-xs font-semibold shrink-0
                ${q.difficulty === 'Easy'
                  ? dark ? 'text-green-400' : 'text-green-600'
                  : q.difficulty === 'Medium'
                    ? dark ? 'text-yellow-400' : 'text-yellow-600'
                    : dark ? 'text-red-400' : 'text-red-600'
                }`}>
                {q.difficulty}
              </span>

              {/* Bookmark button */}
              <button
                onClick={(e) => { e.stopPropagation(); toggleBookmark(q.id); }}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer shrink-0
                  ${dark ? 'hover:bg-indigo-900/50' : 'hover:bg-gray-100'}`}
              >
                {isBookmark
                  ? <BookmarkCheck size={15} className="text-indigo-500" />
                  : <Bookmark size={15} className={dark ? 'text-indigo-700' : 'text-gray-300'} />
                }
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
