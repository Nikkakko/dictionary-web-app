import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = import.meta.env.VITE_DICTIONARY_API;

export const wordApi = createApi({
  reducerPath: 'word',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getWord: builder.query<Word, string>({
      query: word => `/${word}`,
    }),
  }),
});

export const { useGetWordQuery } = wordApi;
