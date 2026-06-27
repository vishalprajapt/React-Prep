'use client';
import { Mic2 } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function MockInterviewPage() {
  const { dark } = useTheme();
  return (
    <div className={`flex-1 flex items-center justify-center h-full
      ${dark ? 'text-indigo-300' : 'text-gray-500'}`}>
      <div className="text-center">
        <Mic2 size={48} className="mx-auto mb-4 opacity-30" />
        <p className="text-xl font-bold">Mock Interview</p>
        <p className="text-sm mt-1 opacity-60">Coming soon</p>
      </div>
    </div>
  );
}
