'use client';
import { useRouter } from 'next/navigation';
import TopicsPage from '@/component/topics/index';
import { useTheme } from '@/context/ThemeContext';

export default function TopicsRoute() {
  const { dark } = useTheme();
  const router   = useRouter();

  return (
    <TopicsPage
      dark={dark}
      onTopicSelect={(topic) => router.push(`/topics/${topic.id}`)}
    />
  );
}
