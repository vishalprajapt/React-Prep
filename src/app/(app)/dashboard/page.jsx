'use client';
import { useRouter } from 'next/navigation';
import Banner           from '@/component/banner/banner';
import Dashboard        from '@/component/dashboard/dashboard';
import DailyGoal        from '@/component/dashboard/dailyGoal';
import ContinueLearning from '@/component/continueLenring/continueLenring';
import Recommended      from '@/component/recommended/recommended';
import ProgressFeatures from '@/component/progessFeatures/progessFeatures';
import Achievement      from '@/component/archivement/archivement';
import { useTheme }     from '@/context/ThemeContext';

export default function DashboardPage() {
  const { dark } = useTheme();
  const router   = useRouter();

  return (
    <div className="flex-1 p-3 sm:p-4 lg:p-5 flex flex-col xl:flex-row gap-4 lg:gap-5">
      {/* Center column */}
      <div className="flex-1 flex flex-col gap-4 lg:gap-5 min-w-0">
        <Banner dark={dark} />
        <Dashboard dark={dark} />
        <ContinueLearning dark={dark} onGoToNotes={() => router.push('/notes')} />
        <Recommended dark={dark} />
      </div>
      {/* Right column */}
      <div className="w-full xl:w-64 xl:shrink-0 flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-1 gap-4">
          <DailyGoal dark={dark} />
          <ProgressFeatures dark={dark} />
          <Achievement dark={dark} />
        </div>
      </div>
    </div>
  );
}
