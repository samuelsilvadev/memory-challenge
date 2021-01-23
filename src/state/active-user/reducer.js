export function reducer(state = {}, action = {}) {
	if (action.type === 'CREATE_USER') {
		return action.payload.user;
	}

	return state;
}
