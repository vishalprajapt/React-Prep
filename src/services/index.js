// services/index.js
// All API functions for ReactPrep.
// Usage anywhere in the app:
//   import { loginApi, registerApi } from '@/services';

import { apiClient } from './axiosClient';

// ── Auth ──────────────────────────────────────────────────────────────────────

/**
 * Login
 * POST https://react-prep-backend.vercel.app/api/auth/login
 * Body: { email, password }
 */
export const loginApi = (data) => apiClient.post('/api/auth/login', data);

/**
 * Register
 * POST https://react-prep-backend.vercel.app/api/auth/ragister
 * Body: { name, email, password }
 * (spelling matches the backend route)
 */
export const registerApi = (data) => apiClient.post('/api/auth/register', data);
