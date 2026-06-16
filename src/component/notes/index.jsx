'use client';
// notes/index.jsx  — main Notes entry point

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import HeroSection  from './hero';
import FolderCard   from './folderCard';
import ResumeCard   from './resumeCard';
import ReadPage     from './read/index';
import PracticePage from './practice/index';

const FOLDERS = [
  { title: 'Read',     desc: '24 questions with answers', progress: 72, progressColor: 'bg-indigo-600' },
  { title: 'Practice', desc: '18 questions, no hints',    progress: 45, progressColor: 'bg-green-500'  },
];

// subPage: null | 'read' | 'practice'
export default function NotesPage({ dark }) {
  const [subPage, setSubPage] = useState(null);

  const handleBack = () => setSubPage(null);

  if (subPage === 'read')     return <ReadPage     dark={dark} onBack={handleBack} />;
  if (subPage === 'practice') return <PracticePage dark={dark} onBack={handleBack} />;

  return (
    <div className="flex-1 overflow-y-auto p-3 sm:p-5 flex flex-col gap-4 lg:gap-5">

      {/* ── Breadcrumb ── */}
      <div className="flex items-center gap-1 text-sm flex-wrap">
        <span className={dark ? 'text-indigo-400' : 'text-gray-500'}>Notes</span>
        <ChevronRight size={13} className={dark ? 'text-indigo-700' : 'text-gray-400'} />
        <span className={`font-semibold ${dark ? 'text-indigo-100' : 'text-gray-800'}`}>
          React Notes
        </span>
      </div>

      {/* ── Hero Banner ── */}
      <HeroSection />

      {/* ── Folder Cards ── */}
      <div>
        <h2 className={`text-sm font-semibold mb-3 ${dark ? 'text-indigo-300' : 'text-gray-600'}`}>
          Choose a folder
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FOLDERS.map((folder) => (
            <FolderCard
              key={folder.title}
              dark={dark}
              {...folder}
              onClick={() => setSubPage(folder.title.toLowerCase())}
            />
          ))}
        </div>
      </div>

      {/* ── Resume Card ── */}
      <ResumeCard
        dark={dark}
        title="Continue where you left off"
        subtitle="Practice Q7 — useCallback vs useMemo"
        onResume={() => setSubPage('practice')}
      />
    </div>
  );
}
