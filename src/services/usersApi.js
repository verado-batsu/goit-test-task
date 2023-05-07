import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
	reducerPath: 'usersApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://645577e6f803f345764357f7.mockapi.io' }),
	tagTypes: ['Users'],
	endpoints: (builder) => ({
		getUsers: builder.query({
			query: (page) => `/users?page=${page}&limit=3`,
			providesTags: ['Users'],
		}),
		updateUser: builder.mutation({
			query: ({id, ...user}) => ({
				url: `/users/${id}`,
				method: 'PUT',
				body: user,
			}),
			invalidatesTags: ['Users'],
		})
	}),
})

export const { useGetUsersQuery, useUpdateUserMutation } = usersApi;