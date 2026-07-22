'use client';
// questions/index.jsx

import { useState } from 'react';
import { Bookmark, BookmarkCheck, SlidersHorizontal, ArrowUpDown, AlertCircle } from 'lucide-react';
import { useQuestions } from './useQuestions';
import ReactSpinner     from '@/component/loader/ReactSpinner';

const FILTERS = ['All', 'Easy', 'Medium', 'Hard', 'Bookmarked'];

const DIFFICULTY_DOT = {
  Easy:   'bg-green-500',
  Medium: 'bg-yellow-400',
  Hard:   'bg-red-500',
};

const STATUS_STYLES = {
  Solved: {
    light: 'text-green-600',
    dark:  'text-green-400',
    label: '✓ Solved',
  },
  Attempted: {
    light: 'text-yellow-600',
    dark:  'text-yellow-400',
    label: '~ Attempted',
  },
  New: {
    light: 'text-indigo-600 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-full text-xs font-semibold',
    dark:  'text-indigo-300 bg-indigo-900/40 border border-indigo-700 px-2 py-0.5 rounded-full text-xs font-semibold',
    label: '• New',
  },
};

export default function QuestionsPage({ dark }) {
  const { questions, loading, error } = useQuestions();
  const [activeFilter, setActiveFilter] = useState('All');
  const [bookmarks,    setBookmarks]    = useState({});

  const toggleBookmark = (id) =>
    setBookmarks((prev) => ({ ...prev, [id]: !prev[id] }));

  const isBookmarked = (q) =>
    bookmarks[q.id] !== undefined ? bookmarks[q.id] : q.bookmarked;

  const filtered = questions.filter((q) => {
    if (activeFilter === 'Bookmarked') return isBookmarked(q);
    if (activeFilter === 'All')        return true;
    return q.difficulty === activeFilter;
  });

  const total  = questions.length;
  const solved = questions.filter((q) => q.status === 'Solved').length;

  return (
    <div className="flex-1 overflow-y-auto p-3 sm:p-5 flex flex-col gap-4">

      {/* ── Page heading ── */}
      <div>
        <h1 className={`text-xl sm:text-2xl font-bold
          ${dark ? 'text-white' : 'text-gray-900'}`}>
          Questions
        </h1>
        <p className={`text-sm mt-0.5 ${dark ? 'text-indigo-400' : 'text-gray-500'}`}>
          {loading
            ? 'Loading...'
            : `${total} total · ${solved} solved · 85% avg. score`}
        </p>
      </div>

      {/* ── Filters + Sort row ── */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium
                border transition-colors cursor-pointer
                ${activeFilter === f
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : dark
                    ? 'border-indigo-800 text-indigo-300 hover:border-indigo-500'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-indigo-300'}`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border
            text-xs sm:text-sm font-medium transition-colors cursor-pointer
            ${dark
              ? 'border-indigo-800 text-indigo-300 hover:bg-indigo-900/40'
              : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
            <SlidersHorizontal size={13} /> Filter
          </button>
          <button className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border
            text-xs sm:text-sm font-medium transition-colors cursor-pointer
            ${dark
              ? 'border-indigo-800 text-indigo-300 hover:bg-indigo-900/40'
              : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
            <ArrowUpDown size={13} /> Sort
          </button>
        </div>
      </div>

      {/* ── List area ── */}
      <div className="flex flex-col gap-2 pb-4">

        {/* ── Loading — React spinner centered ── */}
        {loading && (
          <div className="flex flex-col items-center justify-center gap-3 py-20">
            <ReactSpinner size={52} dark={dark} />
            <p className={`text-xs font-medium ${dark ? 'text-indigo-500' : 'text-gray-400'}`}>
              Loading questions...
            </p>
          </div>
        )}

        {/* ── Error ── */}
        {!loading && error && (
          <div className={`flex items-center justify-center gap-2 py-16 text-sm
            ${dark ? 'text-red-400' : 'text-red-500'}`}>
            <AlertCircle size={16} />
            {error}
          </div>
        )}

        {/* ── Empty ── */}
        {!loading && !error && filtered.length === 0 && (
          <p className={`text-center py-12 text-sm
            ${dark ? 'text-indigo-500' : 'text-gray-400'}`}>
            No questions found.
          </p>
        )}

        {/* ── Question rows ── */}
        {!loading && !error && filtered.map((q, idx) => {
          const ss         = STATUS_STYLES[q.status] ?? STATUS_STYLES.New;
          const dotColor   = DIFFICULTY_DOT[q.difficulty] ?? 'bg-gray-400';
          const bookmarked = isBookmarked(q);

          return (
            <div
              key={q.id}
              className={`flex items-center gap-3 sm:gap-4 rounded-xl border
                px-3 sm:px-5 py-3 sm:py-4 transition-colors cursor-pointer
                ${dark
                  ? 'bg-[#0f0c29] border-indigo-900 hover:border-indigo-700'
                  : 'bg-white border-gray-100 hover:border-indigo-200 shadow-sm'}`}
            >
              {/* Serial number */}
              <span className={`text-xs sm:text-sm font-mono font-semibold
                w-6 shrink-0 text-center
                ${dark ? 'text-indigo-600' : 'text-gray-400'}`}>
                {String(idx + 1).padStart(2, '0')}
              </span>

              {/* Difficulty dot */}
              <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${dotColor}`} />

              {/* Title + tags + status */}
              <div className="flex-1 min-w-0">
                <p className={`text-sm sm:text-base font-medium leading-snug
                  ${dark ? 'text-indigo-100' : 'text-gray-800'}`}>
                  {q.title}
                </p>
                <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                  {q.tags.map((tag) => (
                    <span key={tag}
                      className={`text-xs px-2 py-0.5 rounded-full font-medium
                        ${dark
                          ? 'bg-indigo-900/50 text-indigo-300'
                          : 'bg-gray-100 text-gray-600'}`}>
                      {tag}
                    </span>
                  ))}
                  {q.status === 'New' ? (
                    <span className={dark ? ss.dark : ss.light}>{ss.label}</span>
                  ) : (
                    <span className={`text-xs font-semibold ${dark ? ss.dark : ss.light}`}>
                      {ss.label}
                    </span>
                  )}
                </div>
              </div>

              {/* Difficulty label */}
              <span className={`hidden sm:inline text-xs font-semibold shrink-0
                ${q.difficulty === 'Easy'
                  ? dark ? 'text-green-400'  : 'text-green-600'
                  : q.difficulty === 'Medium'
                    ? dark ? 'text-yellow-400' : 'text-yellow-600'
                    : dark ? 'text-red-400'    : 'text-red-600'}`}>
                {q.difficulty}
              </span>

              {/* Bookmark */}
              <button
                onClick={(e) => { e.stopPropagation(); toggleBookmark(q.id); }}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer shrink-0
                  ${dark ? 'hover:bg-indigo-900/50' : 'hover:bg-gray-100'}`}>
                {bookmarked
                  ? <BookmarkCheck size={15} className="text-indigo-500" />
                  : <Bookmark size={15} className={dark ? 'text-indigo-700' : 'text-gray-300'} />}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
