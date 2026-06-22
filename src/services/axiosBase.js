// services/axiosBase.js
// Axios instance factory — request + response interceptors included.
//
// Backend middleware expects these headers on EVERY request:
//   appid    — must match APP_ID   (e.g. "reactprep")
//   version  — must match APP_VERSION (e.g. "1")
//   userid   — logged-in user's _id (optional, send when available)
//   Authorization — "Bearer <token>" (optional, send when logged in)

import axios from 'axios';
import localStore from '@/utils/localStore';
import { getUserData } from '@/utils/loginUserData';
import { APP_ID, APP_VERSION, LOGOUT_RESPONSE_CODES } from '@/utils/constants';

const isClient = typeof window !== 'undefined';

// ── Lightweight toast ────────────────────────────────────────────────────────
let _toastTimer = null;

const showToast = (message, type = 'error') => {
  if (!isClient) return;
  if (document.getElementById('rp-toast')) return;

  const bg = { error: '#ef4444', success: '#22c55e', info: '#6366f1' };

  const el = document.createElement('div');
  el.id = 'rp-toast';
  el.textContent = message;
  Object.assign(el.style, {
    position: 'fixed', bottom: '24px', right: '24px', zIndex: '9999',
    background: bg[type] ?? bg.info, color: '#fff',
    padding: '12px 20px', borderRadius: '10px',
    fontSize: '14px', fontWeight: '500',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    opacity: '1', transition: 'opacity 0.3s ease',
  });
  document.body.appendChild(el);

  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => {
    el.style.opacity = '0';
    setTimeout(() => el.remove(), 300);
  }, 3000);
};

// ── Session-expired handler ──────────────────────────────────────────────────
const handleSessionExpired = () => {
  if (!isClient) return;
  localStore.clearAllAuth();
  showToast('Session expired. Please login again.');
  setTimeout(() => { window.location.href = '/'; }, 2000);
};

// ── Factory ──────────────────────────────────────────────────────────────────
/**
 * @param {string} baseURL — e.g. process.env.NEXT_PUBLIC_API_URL
 * @returns {import('axios').AxiosInstance}
 */
export const createAxiosInstance = (baseURL) => {
  const instance = axios.create({
    baseURL,
    headers: { 'Content-Type': 'application/json' },
  });

  // ── Request interceptor ──────────────────────────────────────────────────
  instance.interceptors.request.use((config) => {
    // Required by backend middleware — validate app identity
    config.headers['appid']   = APP_ID;
    config.headers['version'] = APP_VERSION;

    // Optional — attach when user is logged in
    const token  = isClient ? localStore.get('token') : null;
    const user   = isClient ? getUserData() : null;

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    // Backend reads req.headers.userid — send _id from stored user
    if (user?._id) {
      config.headers['userid'] = user._id;
    }

    return config;
  });

  // ── Response interceptor ─────────────────────────────────────────────────
  instance.interceptors.response.use(
    (response) => {
      if (LOGOUT_RESPONSE_CODES.includes(response?.data?.responseCode)) {
        handleSessionExpired();
      }
      return response;
    },
    (error) => {
      if (error?.response?.status === 401) {
        handleSessionExpired();
      }
      return Promise.reject(error);
    }
  );

  return instance;
};
