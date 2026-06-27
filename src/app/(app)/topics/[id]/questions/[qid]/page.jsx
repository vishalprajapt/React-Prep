'use client';
// /topics/[id]/questions/[qid]/page.jsx
// Route for a single question detail page.
// AppShell (sidebar + header) is provided by (app)/layout.jsx automatically.

import { useRouter, useParams } from 'next/navigation';
import QuestionDetailPage from '@/component/questionDetail/index';
import { useTheme }       from '@/context/ThemeContext';
import { TOPIC_QUESTIONS } from '@/component/topics/data';

export default function QuestionRoute() {
  const { dark }    = useTheme();
  const router      = useRouter();
  const { id, qid } = useParams();

  // Build ordered sibling id list from all sections in this topic
  const topicDetail = TOPIC_QUESTIONS[Number(id)];
  const siblingIds  = topicDetail
    ? topicDetail.sections.flatMap((s) => s.questions.map((q) => q.id))
    : [];

  const handleBack = (action, nextId) => {
    if (action === 'navigate' && nextId !== undefined) {
      router.push(`/topics/${id}/questions/${nextId}`);
    } else {
      router.push(`/topics/${id}`);
    }
  };

  return (
    <QuestionDetailPage
      questionId={Number(qid)}
      siblingIds={siblingIds}
      dark={dark}
      onBack={handleBack}
    />
  );
}
