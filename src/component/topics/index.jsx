'use client';
// topics/index.jsx

import { useState } from 'react';
import { TOPICS, TOPIC_FILTERS } from './data';

export default function TopicsPage({ dark }) {
  const [activeFilter, setActiveFilter] = useState('All Topics');

  const filtered = TOPICS.filter((t) => {
    if (activeFilter === 'All Topics') return true;
    if (activeFilter === 'Completed')  return t.progress === 100;
    return t.status === activeFilter;
  });

  return (
    <div className="flex-1 overflow-y-auto p-3 sm:p-5 flex flex-col gap-4">

      {/* ── Heading ── */}
      <div>
        <h1 className={`text-xl sm:text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
          Topics
        </h1>
        <p className={`text-sm mt-0.5 ${dark ? 'text-indigo-400' : 'text-gray-500'}`}>
          Master each topic to ace your React interview
        </p>
      </div>

      {/* ── Filter chips ── */}
      <div className="flex items-center gap-2 flex-wrap">
        {TOPIC_FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border transition-colors cursor-pointer
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

      {/* ── Topic cards grid ── */}
      {filtered.length === 0 ? (
        <p className={`text-center py-16 text-sm ${dark ? 'text-indigo-500' : 'text-gray-400'}`}>
          No topics found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 pb-4">
          {filtered.map((topic) => {
            const isStarted = topic.progress > 0;

            return (
              <div
                key={topic.id}
                className={`rounded-2xl border p-4 sm:p-5 flex flex-col gap-3 cursor-pointer
                  transition-all hover:shadow-lg active:scale-[0.99]
                  ${dark
                    ? 'bg-[#0f0c29] border-indigo-900 hover:border-indigo-700'
                    : 'bg-white border-gray-200 hover:border-indigo-300'}`}
              >
                {/* Top row — icon + progress badge */}
                <div className="flex items-start justify-between">
                  {/* Icon circle */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${topic.color}
                      flex items-center justify-center text-white text-lg font-bold shrink-0`}
                  >
                    {topic.title.charAt(0)}
                  </div>

                  {/* Progress badge — only if started */}
                  {isStarted && (
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full
                      ${dark
                        ? 'bg-indigo-900/60 text-indigo-300'
                        : 'bg-indigo-50 text-indigo-600'}`}>
                      {topic.progress}%
                    </span>
                  )}
                </div>

                {/* Title + questions count */}
                <div>
                  <h3 className={`font-bold text-base leading-tight
                    ${dark ? 'text-indigo-100' : 'text-gray-800'}`}>
                    {topic.title}
                  </h3>
                  <p className={`text-xs mt-0.5 ${dark ? 'text-indigo-400' : 'text-gray-500'}`}>
                    {topic.questions} questions
                  </p>
                </div>

                {/* Progress bar + label */}
                <div>
                  {isStarted ? (
                    <>
                      <div className={`h-1.5 rounded-full ${dark ? 'bg-indigo-900/60' : 'bg-gray-100'}`}>
                        <div
                          className={`h-1.5 rounded-full transition-all ${topic.progressColor}`}
                          style={{ width: `${topic.progress}%` }}
                        />
                      </div>
                      <p className={`text-xs mt-1.5 font-medium ${topic.progressColor.replace('bg-', 'text-')}`}>
                        {topic.progress}% complete
                      </p>
                    </>
                  ) : (
                    <p className={`text-xs font-medium ${dark ? 'text-indigo-600' : 'text-gray-400'}`}>
                      Not started
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
