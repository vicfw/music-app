import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SingleSongRootObject, ShazamCoreRootObject } from './types';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '3f23bd5f83mshd3ed9c7f45a8ed8p12f916jsnb233a5ee1922'
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query<ShazamCoreRootObject[], void>({
      query: () => '/charts/world',
    }),
    getSongsDetails: builder.query<SingleSongRootObject, { songid: string }>({
      query: ({ songid }) => `/tracks/details?track_id=${songid}`,
    }),
  }),
});

export const { useGetTopChartsQuery, useGetSongsDetailsQuery } = shazamCoreApi;
