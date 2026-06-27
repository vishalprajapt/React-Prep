'use client';
import QuestionsPage from '@/component/questions/index';
import { useTheme }  from '@/context/ThemeContext';

export default function QuestionsRoute() {
  const { dark } = useTheme();
  return <QuestionsPage dark={dark} />;
}
