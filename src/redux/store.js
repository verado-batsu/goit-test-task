import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./usersApi";
import { filtredUsersReducer } from "./usersSlice";


export const store = configureStore({
	reducer: {
		[usersApi.reducerPath]: usersApi.reducer,
		filtredUsers: filtredUsersReducer,
	},
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});