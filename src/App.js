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
import Mockman from "mockman-js";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<PageContainer page={<Home />} />} />
				<Route path="/liked" element={<PageContainer page={<Liked />} />} />
				<Route
					path="/watchLater"
					element={<PageContainer page={<WatchLater />} />}
				/>
				<Route
					path="/playList"
					element={<PageContainer page={<Playlist />} />}
				/>
				<Route path="/history" element={<PageContainer page={<History />} />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route
					path="/userProfile"
					element={<PageContainer page={<UserProfile />} />}
				/>
				<Route path="*" element={<PageNotFound />} />
				{/* Remove Later */}
				<Route path="/mockman" element={<Mockman />} />
			</Routes>
		</div>
	);
}

export default App;
