import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  SingleSongRootObject,
  ShazamCoreRootObject,
  RelatedSongsRootObject,
  ArtistDetailsRootObject,
  SongsByCountryRootObject,
  SongsByGenreRootObject,
  GetSongsBySearchRootObject,
} from './types';

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
    getSongsByGenre: builder.query<SongsByGenreRootObject[], string>({
      query: (genre) => `/charts/genre-world?genre_code=${genre}`,
    }),
    getSongsDetails: builder.query<SingleSongRootObject, { songid: string }>({
      query: ({ songid }) => `/tracks/details?track_id=${songid}`,
    }),
    getSongRelated: builder.query<RelatedSongsRootObject[], { songid: string }>(
      {
        query: ({ songid }) => `/tracks/related?track_id=${songid}`,
      }
    ),
    getArtistDetails: builder.query<ArtistDetailsRootObject, string>({
      query: (artistId) => `/artists/details?artist_id=${artistId}`,
    }),
    getSongsByCountry: builder.query<SongsByCountryRootObject[], string>({
      query: (countryCode) => `/charts/country?country_code=${countryCode}`,
    }),
    getSongsBySearch: builder.query<GetSongsBySearchRootObject, string>({
      query: (searchTerm) =>
        `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetSongsByGenreQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi;
