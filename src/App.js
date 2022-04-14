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
	VideoListing,
	PlaylistFolder,
} from "./frontend/pages";
import { PageContainer } from "./frontend/components";
import { PrivateRoute } from "./frontend/protectedRoute/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
							<PageContainer page={<WatchLater />} />
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
							<PageContainer page={<History />} />
						</PrivateRoute>
					}
				/>

				<Route
					path="/userProfile"
					element={
						<PrivateRoute>
							<PageContainer page={<UserProfile />} />
						</PrivateRoute>
					}
				/>
				<Route
					path="/video/:videoId"
					element={
						<PrivateRoute>
							<PageContainer page={<VideoListing />} />
						</PrivateRoute>
					}
				/>
				<Route
					path="/playlist/:playlistId"
					element={
						<PrivateRoute>
							<PageContainer page={<PlaylistFolder />} />
						</PrivateRoute>
					}
				/>
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<ToastContainer />
		</div>
	);
}

export default App;
