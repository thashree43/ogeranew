import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseurluser = import.meta.env.VITE_BASE_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: baseurluser,
  credentials: 'include',
});
export const UserApislice = createApi({
  reducerPath: 'userapi',
  baseQuery,
  tagTypes: ['Customers', 'Products', 'Sales'],
  endpoints: () => ({


  }),
})