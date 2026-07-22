// services/index.js
// All API functions for ReactPrep.

import { apiClient } from './axiosClient';

// ── Auth ──────────────────────────────────────────────────────────────────────

/** POST /api/auth/login  — Body: { email, password } */
export const loginApi = (data) => apiClient.post('/api/auth/login', data);

/** POST /api/auth/register  — Body: { name, email, password } */
export const registerApi = (data) => apiClient.post('/api/auth/register', data);

// ── Questions ─────────────────────────────────────────────────────────────────

/**
 * GET /api/questions/get_question
 * Query params: { Type: 1, ...extra }
 * Type: 1 → fetch questions list
 */
export const fetchQuestion = (data) =>
  apiClient.post('/api/questions/get_question', data);

/**
 * GET /api/questions/get_question/:id
 * Fetch single question detail by _id
 */
export const fetchQuestionById = (id) =>
  apiClient.get(`/api/questions/get_question/${id}`);
