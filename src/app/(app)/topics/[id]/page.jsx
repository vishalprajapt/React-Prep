'use client';
import { useRouter, useParams } from 'next/navigation';
import TopicDetail from '@/component/topics/TopicDetail';
import { useTheme } from '@/context/ThemeContext';
import { TOPICS }   from '@/component/topics/data';

export default function TopicDetailRoute() {
  const { dark }  = useTheme();
  const router    = useRouter();
  const { id }    = useParams();

  const topic = TOPICS.find((t) => String(t.id) === String(id));

  // Topic not found fallback
  if (!topic) {
    return (
      <div className={`flex-1 flex items-center justify-center h-full
        ${dark ? 'text-indigo-400' : 'text-gray-500'}`}>
        <div className="text-center">
          <p className="text-4xl mb-3">🔍</p>
          <p className="font-semibold">Topic not found</p>
          <button
            onClick={() => router.push('/topics')}
            className="mt-4 text-sm text-indigo-500 underline cursor-pointer"
          >
            Back to Topics
          </button>
        </div>
      </div>
    );
  }

  return (
    <TopicDetail
      topic={topic}
      dark={dark}
      onBack={() => router.push('/topics')}
      onQuestionSelect={(q) => router.push(`/topics/${id}/questions/${q.id}`)}
    />
  );
}
