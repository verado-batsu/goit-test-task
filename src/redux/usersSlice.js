import { createSlice } from "@reduxjs/toolkit";
import { statusFilter } from "./constants";

const initialState = {
	filtredUsers: [],
	filter: statusFilter.all,
};

const usersSlice = createSlice({
	name: 'filtredUsers',
	initialState,
	reducers: {
		addUsers(state, { payload }) {
			console.log(payload)
			return {
				...state,
				filtredUsers: [...state.filtredUsers, ...payload]
			}
		},
	}
})

export const { addUsers } = usersSlice.actions;

export const filtredUsersReducer = usersSlice.reducer;