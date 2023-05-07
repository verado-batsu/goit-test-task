export function getUserStatusFromStorage(user) {
	try {
		const btnStatus = JSON.parse(localStorage.getItem('btnStatus'))?.[user.id] === 'false'
        ? false
		: true;
		return JSON.parse(localStorage.getItem('btnStatus'))?.[user.id]
            ? btnStatus
            : false;
	} catch (error) {
		console.log(error)
	}
}

export function setUserStatusToStorage(user, status) {
	try {
		const btnStatusStorage = {
                ...JSON.parse(localStorage.getItem('btnStatus')),
                [user.id]: status,
            };
        localStorage.setItem('btnStatus', JSON.stringify(btnStatusStorage));
	} catch (error) {
		console.log(error)
	}
}

