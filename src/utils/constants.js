// utils/constants.js

// Must match backend middleware exactly
export const APP_ID      = process.env.NEXT_PUBLIC_APP_ID      || 'reactprep';
export const APP_VERSION = process.env.NEXT_PUBLIC_APP_VERSION || '1';

// HTTP / app-level response codes that should trigger an automatic logout.
export const LOGOUT_RESPONSE_CODES = [401, 4001, 4002];
