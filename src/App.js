import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import Home from 'pages/home';
import Game from 'pages/game';

import {buildStore} from 'state/buildStore';

import {ROUTES} from 'configs/routes';

import styles from './App.module.css';

const store = buildStore();

function App() {
	return (
		<Provider store={store}>
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
		</Provider>
	);
}

export default App;
