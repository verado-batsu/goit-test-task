import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./usersApi";
import { filteredUsersReducer } from "./usersSlice";


export const store = configureStore({
	reducer: {
		[usersApi.reducerPath]: usersApi.reducer,
		users: filteredUsersReducer,
	},
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});