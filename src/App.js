import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { TweetsPage } from "./pages/TweetsPage";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

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
