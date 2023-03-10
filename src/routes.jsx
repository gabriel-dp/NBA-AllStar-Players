import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import PlayerData from './pages/PlayerData';

export default function Router() {
	return (
		<HashRouter>
			<Routes>
				<Route
					path="/"
					exact
					element={<Home />}
				/>
				<Route
					path="/:name"
					exact
					element={<PlayerData />}
				/>
			</Routes>
		</HashRouter>
	);
}
