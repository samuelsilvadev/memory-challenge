import {useSelector} from 'react-redux';

import {getActiveUser} from './selectors';

export function useActiveUser() {
	const user = useSelector(getActiveUser);

	return {
		user,
	};
}
