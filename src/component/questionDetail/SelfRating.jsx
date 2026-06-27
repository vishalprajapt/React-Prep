// questionDetail/SelfRating.jsx
// "How well did you know this?" — Easy / Okay / Hard buttons

const RATINGS = [
  { label: 'Easy', color: 'text-green-500',  border: 'border-green-700',  hover: 'hover:bg-green-900/30'  },
  { label: 'Okay', color: 'text-yellow-400', border: 'border-yellow-700', hover: 'hover:bg-yellow-900/30' },
  { label: 'Hard', color: 'text-red-400',    border: 'border-red-800',    hover: 'hover:bg-red-900/30'    },
];

const RATINGS_LIGHT = [
  { label: 'Easy', color: 'text-green-600',  border: 'border-green-300',  hover: 'hover:bg-green-50'  },
  { label: 'Okay', color: 'text-yellow-600', border: 'border-yellow-300', hover: 'hover:bg-yellow-50' },
  { label: 'Hard', color: 'text-red-600',    border: 'border-red-300',    hover: 'hover:bg-red-50'    },
];

export default function SelfRating({ onRate, selected, dark }) {
  const ratings = dark ? RATINGS : RATINGS_LIGHT;

  return (
    <div className="flex flex-col gap-3">
      <p className={`text-sm font-medium ${dark ? 'text-indigo-300' : 'text-gray-600'}`}>
        How well did you know this?
      </p>
      <div className="grid grid-cols-3 gap-3">
        {ratings.map(({ label, color, border, hover }) => {
          const isSelected = selected === label;
          return (
            <button
              key={label}
              onClick={() => onRate?.(label)}
              className={`py-3 rounded-xl border font-semibold text-sm
                transition-colors cursor-pointer ${color} ${border} ${hover}
                ${isSelected ? 'opacity-100 ring-2 ring-current ring-offset-1' : 'opacity-70 hover:opacity-100'}`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
