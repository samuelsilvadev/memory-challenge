import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './MemoryCard.module.css';

function MemoryCard(props) {
	const {children, onClick, isOpen} = props;

	// TODO: add onFocus, onTouchStart handlers
	// TODO: add dynamic (open close) aria-label on each button

	return (
		<button onClick={onClick} className={styles.wrapper}>
			<span
				className={classnames(styles.innerWrapper, {
					[styles.innerWrapperOpened]: isOpen,
				})}>
				<span className={styles.head} />
				<span className={styles.tail}>{isOpen ? children : ''}</span>
			</span>
		</button>
	);
}

MemoryCard.propTypes = {
	children: PropTypes.node,
	isOpen: PropTypes.bool,
	onClick: PropTypes.func,
};

export default MemoryCard;
