'use client';
import NotesPage from '@/component/notes/index';
import { useTheme } from '@/context/ThemeContext';

export default function NotesRoute() {
  const { dark } = useTheme();
  return <NotesPage dark={dark} />;
}
