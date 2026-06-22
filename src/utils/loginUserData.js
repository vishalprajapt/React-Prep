// utils/loginUserData.js
// Helpers to read / write / clear the logged-in user from localStorage.
//
// Expected user shape from backend:
//   { _id, name, email, createdAt, ... }

import localStore from './localStore';

/** Return the stored user object, or null if not logged in */
export const getUserData = () => localStore.getJSON('user');

/** Return just the JWT token string, or null */
export const getToken = () => localStore.get('token');

/** Return true if a token exists (user is considered logged in) */
export const isLoggedIn = () => Boolean(localStore.get('token'));

/**
 * Save token + user after a successful login / register response.
 * Call this right after loginApi() or registerApi() resolves.
 *
 * @param {string} token  - JWT from response
 * @param {object} user   - user object from response
 */
export const saveAuthData = (token, user) => {
  localStore.set('token', token);
  localStore.setJSON('user', user);
};

/** Wipe token + user (logout) */
export const clearAuthData = () => localStore.clearAllAuth();
