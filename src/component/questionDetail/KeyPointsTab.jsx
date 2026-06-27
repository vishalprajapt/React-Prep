// questionDetail/KeyPointsTab.jsx

import { CheckCircle2 } from 'lucide-react';

export default function KeyPointsTab({ keyPoints, dark }) {
  return (
    <div className="flex flex-col gap-3">
      <p className={`text-xs font-bold tracking-widest
        ${dark ? 'text-indigo-500' : 'text-gray-400'}`}>
        KEY POINTS TO REMEMBER
      </p>
      <ul className="flex flex-col gap-2.5">
        {keyPoints.map((point, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <CheckCircle2
              size={15}
              className={`shrink-0 mt-0.5 ${dark ? 'text-green-500' : 'text-green-600'}`}
            />
            <span className={`text-sm leading-relaxed
              ${dark ? 'text-indigo-200' : 'text-gray-700'}`}>
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
