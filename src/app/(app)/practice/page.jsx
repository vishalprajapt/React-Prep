'use client';
import { Dumbbell } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function PracticePage() {
  const { dark } = useTheme();
  return (
    <div className={`flex-1 flex items-center justify-center h-full
      ${dark ? 'text-indigo-300' : 'text-gray-500'}`}>
      <div className="text-center">
        <Dumbbell size={48} className="mx-auto mb-4 opacity-30" />
        <p className="text-xl font-bold">Practice</p>
        <p className="text-sm mt-1 opacity-60">Coming soon</p>
      </div>
    </div>
  );
}
