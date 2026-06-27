// questionDetail/TabBar.jsx

export default function TabBar({ tabs, active, onChange, dark }) {
  return (
    <div
      className={`flex items-center gap-1 border-b overflow-x-auto scrollbar-none
        ${dark ? 'border-indigo-900' : 'border-gray-200'}`}
    >
      {tabs.map((tab) => {
        const isActive = active === tab;
        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`shrink-0 px-4 py-2.5 text-sm font-medium border-b-2 -mb-px
              transition-colors cursor-pointer whitespace-nowrap
              ${isActive
                ? dark
                  ? 'border-indigo-400 text-indigo-300'
                  : 'border-indigo-600 text-indigo-600'
                : dark
                  ? 'border-transparent text-indigo-500 hover:text-indigo-300'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
