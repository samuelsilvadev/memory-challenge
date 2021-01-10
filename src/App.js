import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from 'pages/home';

import {ROUTES} from 'configs/routes';

import styles from './App.module.css';

function App() {
	return (
		<main className={styles.main}>
			<BrowserRouter>
				<Switch>
					<Route path={ROUTES.HOME}>
						<Home />
					</Route>
				</Switch>
			</BrowserRouter>
		</main>
	);
}

export default App;
