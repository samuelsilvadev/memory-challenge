import {useDispatch} from 'react-redux';

import {createUser, countMove, countWin} from 'state/user/actions';

export function useUser() {
	const dispatch = useDispatch();

	return {
		actions: {
			createUser: (user) => dispatch(createUser(user)),
			countMove: (user) => dispatch(countMove(user)),
			countWin: (user) => dispatch(countWin(user)),
		},
	};
}
