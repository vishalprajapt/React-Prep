'use client';
// topics/TopicDetail.jsx
// Shown when a user clicks a topic card from the Topics list.

import { useState } from 'react';
import { ArrowLeft, Share2, Send, CheckCircle2, Circle, Clock } from 'lucide-react';
import { TOPIC_QUESTIONS } from './data';

/* ── Small helpers ──────────────────────────────────────────────────────────── */

const DIFFICULTY_COLORS = {
  Easy:   { dark: 'text-green-400',  light: 'text-green-600',  bg: 'bg-green-500' },
  Medium: { dark: 'text-yellow-400', light: 'text-yellow-600', bg: 'bg-yellow-400' },
  Hard:   { dark: 'text-red-400',    light: 'text-red-500',    bg: 'bg-red-500' },
};

const FILTERS = ['All', 'In Progress', 'Done', 'New'];

function DifficultyBadge({ level, dark }) {
  const c = DIFFICULTY_COLORS[level] ?? DIFFICULTY_COLORS.Easy;
  return (
    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full
      ${dark ? `${c.dark} bg-white/5` : `${c.light} bg-gray-100`}`}>
      {level}
    </span>
  );
}

function StatusIcon({ status, dark }) {
  if (status === 'done')
    return <CheckCircle2 size={16} className="text-green-500 shrink-0" />;
  if (status === 'answered')
    return <Clock size={16} className={`shrink-0 ${dark ? 'text-yellow-400' : 'text-yellow-500'}`} />;
  return <Circle size={16} className={`shrink-0 ${dark ? 'text-indigo-700' : 'text-gray-300'}`} />;
}

/* ── QuestionRow ────────────────────────────────────────────────────────────── */

function QuestionRow({ q, dark, onSelect }) {
  return (
    <button
      onClick={() => onSelect(q)}
      className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border
        text-left transition-all hover:shadow-md active:scale-[0.99] cursor-pointer
        ${dark
          ? 'bg-[#0f0c29] border-indigo-900 hover:border-indigo-700'
          : 'bg-white border-gray-100 hover:border-indigo-300 shadow-sm'}`}
    >
      <StatusIcon status={q.status} dark={dark} />

      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium leading-snug
          ${dark ? 'text-indigo-100' : 'text-gray-800'}`}>
          {q.title}
        </p>
        {q.answeredBy && (
          <p className={`text-xs mt-0.5 ${dark ? 'text-indigo-500' : 'text-gray-400'}`}>
            {q.answeredBy}
          </p>
        )}
      </div>

      <DifficultyBadge level={q.difficulty} dark={dark} />
    </button>
  );
}

/* ── Section ────────────────────────────────────────────────────────────────── */

function Section({ section, dark, onSelect }) {
  return (
    <div className="flex flex-col gap-2">
      <p className={`text-xs font-bold tracking-widest px-1
        ${dark ? 'text-indigo-500' : 'text-gray-400'}`}>
        {section.title}
        <span className={`ml-2 font-normal ${dark ? 'text-indigo-700' : 'text-gray-300'}`}>
          {section.questions.length}
        </span>
      </p>
      {section.questions.map((q) => (
        <QuestionRow key={q.id} q={q} dark={dark} onSelect={onSelect} />
      ))}
    </div>
  );
}

/* ── Main Component ─────────────────────────────────────────────────────────── */

export default function TopicDetail({ topic, dark, onBack, onQuestionSelect }) {
  const [activeFilter, setActiveFilter] = useState('All');

  // Fetch detailed data; fall back to empty structure if not defined yet
  const detail = TOPIC_QUESTIONS[topic.id] ?? {
    description: `Practice ${topic.title} interview questions.`,
    tags: [`${topic.questions} questions`],
    stats: { completed: 0, inProgress: 0, reviewing: 0 },
    sections: [],
  };

  // Filter helper
  const filterFn = (q) => {
    if (activeFilter === 'All')         return true;
    if (activeFilter === 'Done')        return q.status === 'done';
    if (activeFilter === 'In Progress') return q.status === 'answered';
    if (activeFilter === 'New')         return q.status === 'new';
    return true;
  };

  const filteredSections = detail.sections
    .map((s) => ({ ...s, questions: s.questions.filter(filterFn) }))
    .filter((s) => s.questions.length > 0);

  const totalQ   = detail.sections.reduce((acc, s) => acc + s.questions.length, 0);
  const doneQ    = detail.sections
    .flatMap((s) => s.questions)
    .filter((q) => q.status === 'done').length;
  const pct      = totalQ > 0 ? Math.round((doneQ / totalQ) * 100) : topic.progress;

  return (
    <div className="flex-1 overflow-y-auto p-3 sm:p-5 flex flex-col gap-4">

      {/* ── Top action bar ── */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className={`flex items-center gap-1.5 text-sm font-medium cursor-pointer
            transition-colors px-2 py-1 rounded-lg -ml-2
            ${dark
              ? 'text-indigo-400 hover:bg-indigo-900/40'
              : 'text-gray-500 hover:bg-gray-100'}`}
        >
          <ArrowLeft size={15} />
          All topics
        </button>

        <div className="flex items-center gap-2">
          <button
            className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5
              rounded-lg border cursor-pointer transition-colors
              ${dark
                ? 'border-indigo-800 text-indigo-400 hover:bg-indigo-900/40'
                : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}
          >
            <Send size={12} /> Send
          </button>
          <button
            className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5
              rounded-lg border cursor-pointer transition-colors
              ${dark
                ? 'border-indigo-800 text-indigo-400 hover:bg-indigo-900/40'
                : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}
          >
            <Share2 size={12} /> Share
          </button>
        </div>
      </div>

      {/* ── Hero card ── */}
      <div
        className={`rounded-2xl p-4 sm:p-6 border
          ${dark
            ? 'bg-gradient-to-br from-[#0a0820] to-[#0d0b2a] border-indigo-900'
            : 'bg-gradient-to-br from-white to-indigo-50/40 border-gray-200'}`}
      >
        {/* Icon + title */}
        <div className="flex items-center gap-3 mb-3">
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${topic.color}
              flex items-center justify-center text-white text-xl font-bold shrink-0`}
          >
            {topic.title.charAt(0)}
          </div>
          <div>
            <h1 className={`text-lg sm:text-xl font-bold leading-tight
              ${dark ? 'text-white' : 'text-gray-900'}`}>
              {topic.title}
            </h1>
            <p className={`text-xs sm:text-sm mt-0.5 ${dark ? 'text-indigo-400' : 'text-gray-500'}`}>
              {detail.description}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {detail.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs font-medium px-3 py-1 rounded-full
                ${dark
                  ? 'bg-indigo-900/60 text-indigo-300 border border-indigo-800'
                  : 'bg-indigo-50 text-indigo-600 border border-indigo-100'}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Progress bar */}
        <div className="flex items-center justify-between mb-1.5">
          <span className={`text-xs ${dark ? 'text-indigo-500' : 'text-gray-400'}`}>
            Overall progress
          </span>
          <span className={`text-xs font-bold ${dark ? 'text-green-400' : 'text-green-600'}`}>
            {pct}% complete
          </span>
        </div>
        <div className={`h-2 rounded-full ${dark ? 'bg-indigo-900/60' : 'bg-gray-100'}`}>
          <div
            className={`h-2 rounded-full transition-all ${topic.progressColor}`}
            style={{ width: `${pct}%` }}
          />
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          {[
            { label: 'Completed', value: detail.stats.completed, color: dark ? 'text-green-400' : 'text-green-600' },
            { label: 'In Progress', value: detail.stats.inProgress, color: dark ? 'text-indigo-300' : 'text-indigo-600' },
            { label: 'Reviewing', value: detail.stats.reviewing, color: dark ? 'text-yellow-400' : 'text-yellow-600' },
          ].map(({ label, value, color }) => (
            <div
              key={label}
              className={`rounded-xl p-3 text-center
                ${dark ? 'bg-indigo-900/30 border border-indigo-900' : 'bg-white border border-gray-100 shadow-sm'}`}
            >
              <p className={`text-xl sm:text-2xl font-bold ${color}`}>{value}</p>
              <p className={`text-xs mt-0.5 ${dark ? 'text-indigo-500' : 'text-gray-400'}`}>{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Questions section ── */}
      <div className="flex flex-col gap-4">
        {/* Section header + filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <p className={`text-xs font-bold tracking-widest
            ${dark ? 'text-indigo-400' : 'text-gray-500'}`}>
            QUESTIONS
          </p>

          <div className="flex items-center gap-2 flex-wrap">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors cursor-pointer
                  ${activeFilter === f
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : dark
                      ? 'border-indigo-800 text-indigo-400 hover:border-indigo-600'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-indigo-300'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Question groups */}
        {filteredSections.length === 0 ? (
          <p className={`text-center py-12 text-sm ${dark ? 'text-indigo-600' : 'text-gray-400'}`}>
            No questions found for this filter.
          </p>
        ) : (
          filteredSections.map((section) => (
            <Section
              key={section.title}
              section={section}
              dark={dark}
              onSelect={onQuestionSelect}
            />
          ))
        )}
      </div>

      {/* ── Continue Practice CTA ── */}
      <div className="sticky bottom-0 pb-1">
        <button
          className="w-full py-3.5 rounded-2xl font-bold text-sm text-white
            bg-gradient-to-r from-indigo-600 to-purple-600
            hover:from-indigo-500 hover:to-purple-500
            transition-all shadow-lg shadow-indigo-900/30 cursor-pointer"
        >
          Continue practice
        </button>
      </div>
    </div>
  );
}
