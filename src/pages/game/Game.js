import MemoryList from 'components/memory-list/MemoryList';
import {useRef} from 'react';

import {duplicateEachFigure} from './utils/duplicateEachFigure';
import {shuffle} from './utils/shuffle';

import styles from './Game.module.css';

function Game() {
	const {current: shuffledFigures} = useRef(
		shuffle(duplicateEachFigure([1, 2, 3, 4, 5, 6, 7, 8]))
	);

	return (
		<section className={styles.wrapper}>
			{/* TODO: add title here: 'h1' */}
			<MemoryList figures={shuffledFigures} />
		</section>
	);
}

export default Game;
