import {useState} from 'react';
import PropTypes from 'prop-types';

import MemoryCard from 'components/memory-card/MemoryCard';

import styles from './MemoryList.module.css';

function MemoryList(props) {
	const {figures = []} = props;
	const [openedCards, setOpenedCards] = useState([]);

	const handleOnClick = (index) => () => {
		const cardIndexOnOpenedCards = openedCards.indexOf(index);
		const isCardOpen = cardIndexOnOpenedCards !== -1;

		if (openedCards.length === 2) {
			const [first, second] = openedCards;

			if (first === second) {
				// TODO: dispatch action to count wins.
				// TODO: dispatch action to save cards.
			}

			// NOTE: the ternary below handle the case of when the user clicks
			// again in a card that is open.
			setOpenedCards(isCardOpen ? [] : [index]);
			return;
		}

		if (isCardOpen) {
			const previousCards = [...openedCards];
			previousCards.splice(cardIndexOnOpenedCards, 1);

			setOpenedCards(previousCards);
		} else {
			setOpenedCards([...openedCards, index]);
		}
	};

	if (figures.length === 0) {
		return null;
	}

	return (
		<ul className={styles.list}>
			{figures.map((figure, index) => {
				const isCardOpen = openedCards.includes(index);

				return (
					<li key={index}>
						<MemoryCard
							isOpen={isCardOpen}
							onClick={handleOnClick(index)}>
							{figure}
						</MemoryCard>
					</li>
				);
			})}
		</ul>
	);
}

MemoryList.propTypes = {
	figures: PropTypes.arrayOf(PropTypes.any),
};

export default MemoryList;
