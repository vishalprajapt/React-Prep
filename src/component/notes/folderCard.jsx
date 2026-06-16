// notes/folderCard.jsx

export default function FolderCard({ dark, title, desc, progress, progressColor = 'bg-indigo-600', onClick }) {
  return (
    <div
      onClick={onClick}
      className={`rounded-xl p-4 sm:p-5 border transition-all cursor-pointer hover:shadow-md active:scale-[0.99]
        ${dark
          ? 'bg-[#0f0c29] border-indigo-900 hover:border-indigo-600'
          : 'bg-white border-gray-200 hover:border-indigo-300'}`}
    >
      {/* Icon placeholder */}
      <div className={`w-11 h-11 rounded-xl mb-4 ${dark ? 'bg-indigo-900/60' : 'bg-indigo-50'}`} />

      <h3 className={`font-semibold text-base ${dark ? 'text-indigo-100' : 'text-gray-800'}`}>
        {title}
      </h3>
      <p className={`text-sm mt-1 ${dark ? 'text-indigo-400' : 'text-gray-500'}`}>
        {desc}
      </p>

      <div className={`mt-4 h-2 rounded-full ${dark ? 'bg-indigo-900/60' : 'bg-gray-100'}`}>
        <div className={`h-2 rounded-full ${progressColor}`} style={{ width: `${progress}%` }} />
      </div>
      <div className="flex justify-between items-center mt-2">
        <span className={`text-xs ${dark ? 'text-indigo-400' : 'text-gray-400'}`}>Progress</span>
        <span className={`text-sm font-semibold ${progressColor === 'bg-green-500' ? 'text-green-500' : 'text-indigo-600'}`}>
          {progress}%
        </span>
      </div>
    </div>
  );
}
