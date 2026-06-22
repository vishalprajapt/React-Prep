// utils/localStore.js
// SSR-safe wrapper around localStorage.
// Keys used in this app:
//   'token'  — JWT string returned by login / register
//   'user'   — JSON object { _id, name, email, ... }

const isClient = typeof window !== 'undefined';

const localStore = {
  /** Read a raw string value */
  get(key) {
    if (!isClient) return null;
    try { return localStorage.getItem(key); }
    catch { return null; }
  },

  /** Write a raw string value */
  set(key, value) {
    if (!isClient) return;
    try { localStorage.setItem(key, value); }
    catch { /* storage full — ignore */ }
  },

  /** Delete one key */
  remove(key) {
    if (!isClient) return;
    localStorage.removeItem(key);
  },

  /** Write a JSON-serialisable value */
  setJSON(key, value) {
    this.set(key, JSON.stringify(value));
  },

  /** Read and parse a JSON value (returns null on failure) */
  getJSON(key) {
    const raw = this.get(key);
    if (!raw) return null;
    try { return JSON.parse(raw); }
    catch { return null; }
  },

  /** Remove token + user — call on logout or session expiry */
  clearAllAuth() {
    if (!isClient) return;
    ['token', 'user'].forEach((k) => localStorage.removeItem(k));
  },
};

export default localStore;
