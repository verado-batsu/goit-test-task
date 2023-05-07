import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../services/usersApi";
import { filteredUsersReducer } from "./filteredUsers/usersSlice";


export const store = configureStore({
	reducer: {
		[usersApi.reducerPath]: usersApi.reducer,
		users: filteredUsersReducer,
	},
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});