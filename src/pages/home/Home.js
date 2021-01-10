import {Link} from 'react-router-dom';

import {ROUTES} from 'configs/routes';

import styles from './Home.module.css';

function Home() {
	return (
		<section className={styles.wrapper}>
			<h1 className={styles.title}>Memory Challenge</h1>
			{/* TODO: Update route path the next page is created */}
			<Link className={styles.link} to={ROUTES.HOME}>
				Start
			</Link>
		</section>
	);
}

export default Home;
