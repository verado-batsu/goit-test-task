import { statusFilter } from "./constants";

export const selectFilteredUsers = (state) => {
	switch (state.users.filter) {
        case statusFilter.follow:
            return state.users.filteredUsers.filter(({ following }) => following === false);
        case statusFilter.following:
            return state.users.filteredUsers.filter(({ following }) => following === true);
        default:
            return state.users.filteredUsers;
    }
}

export const selectFilter = (state) => {
	return state.users.filter
}