export function createUserWithoutFollowing(user) {
	return {
		id: user.id,
		user: user.user,
		tweets: user.tweets,
		avatar: user.avatar,
		followers: user.followers,
	};
}