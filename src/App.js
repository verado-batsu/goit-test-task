import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";

import { SharedLayout } from "./SharedLayout/SharedLayout";
const Home = lazy(() => import('./pages/Home'));
const TweetsPage = lazy(() => import('./pages/TweetsPage'));

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<SharedLayout />} >
					<Route index element={<Home />} />
					<Route path="/tweets" element={<TweetsPage />} />
					<Route path="*" element={<Navigate to='/' />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
