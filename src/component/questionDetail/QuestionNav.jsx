// questionDetail/QuestionNav.jsx
// Bottom Previous / Next question navigation bar.

import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function QuestionNav({ onPrev, onNext, hasPrev, hasNext, dark }) {
  return (
    <div
      className={`sticky bottom-0 flex items-center gap-3 pt-4 pb-1
        ${dark ? 'bg-[#07051a]' : 'bg-gray-50'}`}
    >
      {/* Previous */}
      <button
        onClick={onPrev}
        disabled={!hasPrev}
        className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl
          font-semibold text-sm border transition-all cursor-pointer
          disabled:opacity-30 disabled:cursor-not-allowed
          ${dark
            ? 'border-indigo-800 text-indigo-300 hover:bg-indigo-900/40'
            : 'border-gray-200 text-gray-600 hover:bg-gray-100 bg-white'}`}
      >
        <ChevronLeft size={16} />
        Previous
      </button>

      {/* Next */}
      <button
        onClick={onNext}
        disabled={!hasNext}
        className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl
          font-bold text-sm text-white transition-all cursor-pointer
          disabled:opacity-40 disabled:cursor-not-allowed
          bg-gradient-to-r from-indigo-600 to-purple-600
          hover:from-indigo-500 hover:to-purple-500
          shadow-lg shadow-indigo-900/30`}
      >
        Next question
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
