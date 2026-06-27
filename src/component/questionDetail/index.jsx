'use client';
// questionDetail/index.jsx
// Full question detail page — shown when user clicks a question in TopicDetail.
// Has sidebar + header via AppShell (route-level), so this renders only the content area.

import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { QUESTION_DETAIL } from './data';
import DifficultyBadge from './DifficultyBadge';
import TabBar          from './TabBar';
import AnswerTab       from './AnswerTab';
import KeyPointsTab    from './KeyPointsTab';
import SelfRating      from './SelfRating';
import QuestionNav     from './QuestionNav';

/* ── Coming-soon placeholder for Example / Discussion tabs ── */
function ComingSoonTab({ label, dark }) {
  return (
    <div className={`flex flex-col items-center justify-center py-16 gap-3
      ${dark ? 'text-indigo-500' : 'text-gray-400'}`}>
      <span className="text-4xl">🚧</span>
      <p className="font-semibold text-sm">{label} — coming soon</p>
    </div>
  );
}

/* ── Main Component ─────────────────────────────────────────────────────────── */
export default function QuestionDetailPage({
  questionId,
  siblingIds = [],   // ordered list of question ids in this topic section
  onBack,
  dark,
}) {
  const detail = QUESTION_DETAIL[questionId];
  const [activeTab, setActiveTab] = useState('Answer');
  const [rating,    setRating]    = useState(null);

  // Navigation among sibling questions
  const currentIdx = siblingIds.indexOf(questionId);
  const hasPrev    = currentIdx > 0;
  const hasNext    = currentIdx < siblingIds.length - 1;

  const handleNav = (direction) => {
    const nextId = direction === 'prev'
      ? siblingIds[currentIdx - 1]
      : siblingIds[currentIdx + 1];
    if (nextId !== undefined) {
      // Reset tab on navigate
      setActiveTab('Answer');
      setRating(null);
      // Parent handles the actual navigation
      onBack?.('navigate', nextId);
    }
  };

  // Question not found
  if (!detail) {
    return (
      <div className={`flex-1 flex items-center justify-center h-full
        ${dark ? 'text-indigo-400' : 'text-gray-500'}`}>
        <div className="text-center">
          <p className="text-4xl mb-3">🔍</p>
          <p className="font-semibold">Question content not available yet</p>
          <button
            onClick={() => onBack?.('back')}
            className="mt-4 text-sm text-indigo-500 underline cursor-pointer"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  const renderTab = () => {
    switch (activeTab) {
      case 'Answer':
        return <AnswerTab explanation={detail.answer.explanation} dark={dark} />;
      case 'Key Points':
        return <KeyPointsTab keyPoints={detail.answer.keyPoints} dark={dark} />;
      case 'Example':
        return <ComingSoonTab label="Example" dark={dark} />;
      case 'Discussion':
        return <ComingSoonTab label="Discussion" dark={dark} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 p-3 sm:p-5 flex flex-col gap-4 max-w-3xl mx-auto w-full">

      {/* ── Back button ── */}
      <button
        onClick={() => onBack?.('back')}
        className={`self-start flex items-center gap-1.5 text-sm font-medium
          px-2 py-1 rounded-lg -ml-2 transition-colors cursor-pointer
          ${dark
            ? 'text-indigo-400 hover:bg-indigo-900/40'
            : 'text-gray-500 hover:bg-gray-100'}`}
      >
        <ArrowLeft size={15} />
        Back to topic
      </button>

      {/* ── Question header ── */}
      <div className="flex flex-col gap-3">
        {/* Difficulty + tags row */}
        <div className="flex items-center gap-2 flex-wrap">
          <DifficultyBadge level={detail.difficulty} dark={dark} />
          {detail.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs font-medium px-2.5 py-1 rounded-full border
                ${dark
                  ? 'bg-indigo-900/40 text-indigo-300 border-indigo-800'
                  : 'bg-gray-100 text-gray-600 border-gray-200'}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className={`text-lg sm:text-2xl font-bold leading-snug
          ${dark ? 'text-white' : 'text-gray-900'}`}>
          {detail.title}
        </h1>
      </div>

      {/* ── Tab bar ── */}
      <TabBar
        tabs={detail.tabs}
        active={activeTab}
        onChange={setActiveTab}
        dark={dark}
      />

      {/* ── Tab content ── */}
      <div className="flex flex-col gap-5 pb-2">
        {renderTab()}

        {/* Show self-rating only on Answer and Key Points tabs */}
        {(activeTab === 'Answer' || activeTab === 'Key Points') && (
          <SelfRating
            dark={dark}
            onRate={(r) => setRating(r)}
            selected={rating}
          />
        )}
      </div>

      {/* ── Prev / Next navigation ── */}
      <QuestionNav
        dark={dark}
        hasPrev={hasPrev}
        hasNext={hasNext}
        onPrev={() => handleNav('prev')}
        onNext={() => handleNav('next')}
      />
    </div>
  );
}
