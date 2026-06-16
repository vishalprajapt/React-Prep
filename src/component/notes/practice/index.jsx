'use client';
// notes/practice/index.jsx

import { useState } from 'react';
import { ChevronRight, CheckCircle2, Circle } from 'lucide-react';
import { PRACTICE_QUESTIONS, DIFFICULTY_STYLES } from './data';

export default function PracticePage({ dark, onBack }) {
  // answers keyed by question id
  const [answers, setAnswers]     = useState(() => {
    const init = {};
    PRACTICE_QUESTIONS.forEach((q) => { init[q.id] = q.submittedAnswer || ''; });
    return init;
  });
  const [submitted, setSubmitted] = useState(() => {
    const init = {};
    PRACTICE_QUESTIONS.forEach((q) => { init[q.id] = q.submitted; });
    return init;
  });

  const answeredCount  = Object.values(submitted).filter(Boolean).length;
  const totalCount     = PRACTICE_QUESTIONS.length;
  const remainingCount = totalCount - answeredCount;
  const percent        = Math.round((answeredCount / totalCount) * 100);

  const handleSubmit = (id) => {
    if (!answers[id]?.trim()) return;
    setSubmitted((prev) => ({ ...prev, [id]: true }));
  };

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
          <span className={`font-semibold ${dark ? 'text-indigo-100' : 'text-gray-800'}`}>Practice</span>
        </div>
        <span className={`text-sm font-medium shrink-0 ${dark ? 'text-green-400' : 'text-green-600'}`}>
          {totalCount} questions
        </span>
      </div>

      {/* ── Stats cards ── */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Answered',  value: answeredCount,  color: 'text-indigo-500' },
          { label: 'Remaining', value: remainingCount, color: 'text-yellow-500' },
          { label: 'Complete',  value: `${percent}%`,  color: 'text-green-500' },
        ].map(({ label, value, color }) => (
          <div
            key={label}
            className={`rounded-xl border p-3 sm:p-4 text-center transition-colors
              ${dark ? 'bg-[#0f0c29] border-indigo-900' : 'bg-white border-gray-200'}`}
          >
            <p className={`text-xl sm:text-2xl font-bold ${color}`}>{value}</p>
            <p className={`text-xs mt-1 ${dark ? 'text-indigo-400' : 'text-gray-500'}`}>{label}</p>
          </div>
        ))}
      </div>

      {/* ── Progress bar ── */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <span className={`text-sm font-medium ${dark ? 'text-indigo-300' : 'text-gray-700'}`}>
            React Notes progress
          </span>
          <span className="text-sm font-semibold text-indigo-500">{percent}%</span>
        </div>
        <div className={`h-2.5 rounded-full ${dark ? 'bg-indigo-900/60' : 'bg-gray-100'}`}>
          <div
            className="h-2.5 rounded-full bg-indigo-600 transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      {/* ── Questions ── */}
      <div className="flex flex-col gap-3 pb-4">
        {PRACTICE_QUESTIONS.map((q, idx) => {
          const dc          = DIFFICULTY_STYLES[q.difficulty];
          const isDone      = submitted[q.id];
          const answerText  = answers[q.id] || '';
          const charCount   = answerText.length;

          return (
            <div
              key={q.id}
              className={`rounded-xl border transition-colors
                ${dark ? 'bg-[#0f0c29] border-indigo-900' : 'bg-white border-gray-200'}`}
            >
              {/* Question header */}
              <div className="px-4 sm:px-5 pt-4 sm:pt-5 pb-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5 flex-1 min-w-0">
                    {/* Done indicator */}
                    <span className="mt-0.5 shrink-0">
                      {isDone
                        ? <CheckCircle2 size={16} className="text-green-500" />
                        : <Circle size={16} className={dark ? 'text-indigo-700' : 'text-gray-300'} />
                      }
                    </span>
                    <div className="min-w-0">
                      <p className={`text-xs mb-1 ${dark ? 'text-indigo-500' : 'text-gray-400'}`}>
                        Q{idx + 1} of {PRACTICE_QUESTIONS.length}
                      </p>
                      <p className={`font-semibold text-sm sm:text-base leading-snug
                        ${dark ? 'text-indigo-100' : 'text-gray-800'}`}>
                        {q.question}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {isDone && (
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border
                        ${dark
                          ? 'text-green-400 bg-green-900/30 border-green-800'
                          : 'text-green-600 bg-green-50 border-green-200'}`}>
                        Submitted
                      </span>
                    )}
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border
                      ${dark ? dc.dark : dc.light}`}>
                      {q.difficulty}
                    </span>
                  </div>
                </div>
              </div>

              {/* Answer area */}
              <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                {isDone ? (
                  /* Submitted answer display */
                  <div className={`rounded-lg p-3 sm:p-4 border-l-4 border-green-500
                    ${dark ? 'bg-green-900/20' : 'bg-green-50'}`}>
                    <p className="text-xs font-bold tracking-wider mb-2 text-green-500">YOUR ANSWER</p>
                    <p className={`text-sm leading-relaxed ${dark ? 'text-indigo-200' : 'text-gray-700'}`}>
                      {answers[q.id]}
                    </p>
                  </div>
                ) : (
                  /* Input textarea */
                  <div>
                    <textarea
                      rows={4}
                      maxLength={500}
                      placeholder="Type your answer here..."
                      value={answerText}
                      onChange={(e) =>
                        setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))
                      }
                      className={`w-full rounded-lg border px-3 sm:px-4 py-3 text-sm outline-none resize-none transition-colors
                        ${dark
                          ? 'bg-indigo-950/40 border-indigo-800 text-indigo-200 placeholder-indigo-600 focus:border-indigo-500'
                          : 'bg-gray-50 border-gray-200 text-gray-700 placeholder-gray-400 focus:border-indigo-400'
                        }`}
                    />
                    <div className="flex items-center justify-between mt-2">
                      <span className={`text-xs ${dark ? 'text-indigo-600' : 'text-gray-400'}`}>
                        {charCount} / 500
                      </span>
                      <button
                        onClick={() => handleSubmit(q.id)}
                        disabled={!answerText.trim()}
                        className={`bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold
                          px-4 sm:px-5 py-2 rounded-lg transition-colors cursor-pointer
                          disabled:opacity-40 disabled:cursor-not-allowed`}
                      >
                        Submit answer
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
