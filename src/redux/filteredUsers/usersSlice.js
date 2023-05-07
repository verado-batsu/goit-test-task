import { createSlice } from "@reduxjs/toolkit";
import { statusFilter } from "../constants";
import { shouldAddFilteredUsers } from "../../utils/shouldAddFilteredUsers";

const initialState = {
	filteredUsers: [],
	filter: statusFilter.all,
};

const usersSlice = createSlice({
	name: 'filteredUsers',
	initialState,
	reducers: {
		addUsers(state, { payload }) {
			return shouldAddFilteredUsers(state, payload)
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