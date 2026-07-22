'use client';
// notes/read/useReadQuestions.js
// Fetches questions from API (Type:1) for the Read page.
// Same endpoint as questions sidebar — just normalised differently.

import { useState, useEffect } from 'react';
import { fetchQuestion } from '@/services';

/**
 * Normalises API question → Read page shape:
 * { id, question, answer, difficulty, tags, readTime }
 */
function normalise(q) {
  // Estimate read time from answer length (rough: 200 words/min)
  const answerText = q.answer ?? q.description ?? '';
  const words      = answerText.trim().split(/\s+/).length;
  const mins       = Math.max(1, Math.round(words / 200));

  return {
    id:         q._id,
    question:   q.question ?? q.title ?? '',
    answer:     answerText,
    difficulty: q.difficulty ?? 'Easy',
    tags:       Array.isArray(q.tags) ? q.tags : [q.topic ?? 'General'],
    readTime:   `${mins} min read`,
  };
}

export function useReadQuestions() {
  const [questions, setQuestions] = useState([]);
  const [loading,   setLoading]   = useState(true);
  const [error,     setError]     = useState(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const res  = await fetchQuestion({Type:1});
        const raw  = res?.data?.questions ?? res?.data?.data ?? res?.data ?? [];
        const list = Array.isArray(raw) ? raw : [];
        if (!cancelled) setQuestions(list.map(normalise));
      } catch (err) {
        if (!cancelled)
          setError(err?.response?.data?.message ?? 'Failed to load questions');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => { cancelled = true; };
  }, []);

  return { questions, loading, error };
}
