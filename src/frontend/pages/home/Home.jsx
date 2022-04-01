import React from "react";
import { VideoCard } from "../../components";
import {
	useActionContext,
	useDataContext,
	useAuthContext,
} from "../../context";
import { postHistoryData } from "../../services";
import { CategorySlider } from "./CategorySlider";
import "./home.css";

function Home() {
	const { dataState } = useDataContext();
	const { videosData } = dataState;
	const { actionDispatch } = useActionContext();
	const { authState } = useAuthContext();
	const { token } = authState;

	return (
		<div className="home__container">
			<CategorySlider />
			<div className="videos__container">
				{videosData.map((video) => (
					<VideoCard
						key={video._id}
						video={video}
						onClick={() => postHistoryData(video, actionDispatch, token)}
					/>
				))}
			</div>
		</div>
	);
}

export { Home };
