export function shouldAddFilteredUsers(state, payload) {
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
}