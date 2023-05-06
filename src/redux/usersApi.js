import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://645577e6f803f345764357f7.mockapi.io' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/users`,
    }),
  }),
})

export const { useGetUsersQuery } = usersApi;