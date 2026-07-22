'use client';
// questions/useQuestions.js
// Fetches questions list from API with Type:1 payload.

import { useState, useEffect } from 'react';
import { fetchQuestion } from '@/services';

/**
 * Normalises a single question from API response to UI shape.
 * Adjust field names here if backend changes.
 */
function normalise(q) {
  return {
    id:         q._id,
    title:      q.question ?? q.title ?? '',
    tags:       Array.isArray(q.tags)   ? q.tags   : [q.topic ?? 'General'],
    difficulty: q.difficulty ?? 'Easy',
    status:     q.status     ?? 'New',
    bookmarked: q.bookmarked ?? false,
  };
}

export function useQuestions() {
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
        // Handle: { data: [...] } or { data: { questions: [...] } } or { data: { data: [...] } }
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
