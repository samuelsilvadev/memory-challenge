import MemoryList from 'components/memory-list/MemoryList';
import {useEffect, useRef} from 'react';

import {useUser} from 'state/user/useUser';

import {duplicateEachFigure} from './utils/duplicateEachFigure';
import {shuffle} from './utils/shuffle';

import styles from './Game.module.css';

function Game() {
	const {current: shuffledFigures} = useRef(
		shuffle(duplicateEachFigure([1, 2, 3, 4, 5, 6, 7, 8]))
	);

	const {
		actions: {createUser},
	} = useUser();

	useEffect(() => {
		createUser({
			name: 'anonymous',
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section className={styles.wrapper}>
			{/* TODO: add title here: 'h1' */}
			<MemoryList figures={shuffledFigures} />
		</section>
	);
}

export default Game;
