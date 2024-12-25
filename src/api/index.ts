import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const HOST_BACKEND = import.meta.env.VITE_HOST_BACKEND_DEV || 'http://localhost:3030';

export const baseQuery = fetchBaseQuery({
  baseUrl: `${HOST_BACKEND}`
})