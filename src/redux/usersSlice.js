import { createSlice } from "@reduxjs/toolkit";
import { statusFilter } from "./constants";

const initialState = {
	filteredUsers: [],
	filter: statusFilter.all,
};

const usersSlice = createSlice({
	name: 'filteredUsers',
	initialState,
	reducers: {
		addUsers(state, { payload }) {
			const shouldAdd = payload.every(user => {
				return state.filteredUsers.every(stateUser => user?.id !== stateUser?.id)
			});
			if (shouldAdd) {
				return {
					...state,
					filteredUsers: [...state.filteredUsers, ...payload]
				}
			} else {
				return {
					...state,
					filteredUsers: state.filteredUsers.map(user => {
						const followers = payload.find(payloadUser => payloadUser.id === user.id)?.followers || user.followers
						return {...user, followers}
					})
				}
			}
			
		},
		updateUsers(state, { payload }) {
			return {
				...state,
				filteredUsers: state.filteredUsers.map(user => {
					if (user.id === payload.id) {
						return {
							...user,
							followers: payload.followers,
							following: payload.status,
						}
					}
					return user;
				})
			}
		},
		updateFilter(state, {payload}) {
			return {
				...state,
				filter: payload,
			}
		}
	}
})

export const { addUsers, updateUsers, updateFilter } = usersSlice.actions;

export const filteredUsersReducer = usersSlice.reducer;