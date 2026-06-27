// services/axiosClient.js
// Single Axios instance for the ReactPrep backend.
// Base URL comes from .env.local → NEXT_PUBLIC_API_URL

import { createAxiosInstance } from './axiosBase';

export const apiClient = createAxiosInstance( "https://react-prep-backend.vercel.app" || process.env.NEXT_PUBLIC_API_URL);
