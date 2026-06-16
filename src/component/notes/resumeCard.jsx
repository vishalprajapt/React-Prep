// notes/resumeCard.jsx

export default function ResumeCard({ dark, title, subtitle, onResume }) {
  return (
    <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3
      rounded-xl p-4 border transition-colors
      ${dark ? 'bg-[#0f0c29] border-indigo-900' : 'bg-white border-gray-200'}`}
    >
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <div className={`w-10 h-10 rounded-lg shrink-0 ${dark ? 'bg-indigo-900/60' : 'bg-gray-100'}`} />
        <div className="min-w-0">
          <p className={`text-sm font-semibold ${dark ? 'text-indigo-100' : 'text-gray-800'}`}>
            {title}
          </p>
          <p className={`text-xs mt-0.5 truncate ${dark ? 'text-indigo-400' : 'text-gray-500'}`}>
            {subtitle}
          </p>
        </div>
      </div>
      <button
        onClick={onResume}
        className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold
          px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap self-end sm:self-auto"
      >
        Resume →
      </button>
    </div>
  );
}
