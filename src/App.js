import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
	Home,
	Login,
	Liked,
	Playlist,
	Signup,
	History,
	WatchLater,
	UserProfile,
	PageNotFound,
} from "./frontend/pages";
import { PageContainer } from "./frontend/components";
import { PrivateRoute } from "./frontend/protectedRoute/PrivateRoute";
import Mockman from "mockman-js";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/" element={<PageContainer page={<Home />} />} />
				<Route
					path="/liked"
					element={
						<PrivateRoute>
							<PageContainer page={<Liked />} />
						</PrivateRoute>
					}
				/>
				<Route
					path="/watchLater"
					element={
						<PrivateRoute>
							<PageContainer page={<WatchLater />} />{" "}
						</PrivateRoute>
					}
				/>
				<Route
					path="/playList"
					element={
						<PrivateRoute>
							<PageContainer page={<Playlist />} />
						</PrivateRoute>
					}
				/>
				<Route
					path="/history"
					element={
						<PrivateRoute>
							<PageContainer page={<History />} />{" "}
						</PrivateRoute>
					}
				/>

				<Route
					path="/userProfile"
					element={
						<PrivateRoute>
							<PageContainer page={<UserProfile />} />{" "}
						</PrivateRoute>
					}
				/>
				<Route path="*" element={<PageNotFound />} />
				{/* Remove Later */}
				<Route path="/mockman" element={<Mockman />} />
			</Routes>
		</div>
	);
}

export default App;
