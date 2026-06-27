// questionDetail/DifficultyBadge.jsx

const COLORS = {
  Easy:   { dark: 'bg-green-900/50  text-green-400  border-green-800',  light: 'bg-green-50  text-green-700  border-green-200' },
  Medium: { dark: 'bg-yellow-900/50 text-yellow-300 border-yellow-800', light: 'bg-yellow-50 text-yellow-700 border-yellow-200' },
  Hard:   { dark: 'bg-red-900/50    text-red-400    border-red-800',    light: 'bg-red-50    text-red-600    border-red-200' },
};

export default function DifficultyBadge({ level, dark }) {
  const c = COLORS[level] ?? COLORS.Easy;
  return (
    <span className={`inline-flex items-center text-xs font-bold px-2.5 py-1
      rounded-full border ${dark ? c.dark : c.light}`}>
      {level}
    </span>
  );
}
