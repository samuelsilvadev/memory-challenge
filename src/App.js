import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from 'pages/home';
import Game from 'pages/game';

import {ROUTES} from 'configs/routes';

import styles from './App.module.css';

function App() {
	return (
		<main className={styles.main}>
			<BrowserRouter>
				<Switch>
					<Route path={ROUTES.GAME}>
						<Game />
					</Route>
					<Route path={ROUTES.HOME}>
						<Home />
					</Route>
				</Switch>
			</BrowserRouter>
		</main>
	);
}

export default App;
