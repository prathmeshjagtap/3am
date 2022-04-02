import React from "react";
import { VideoCard } from "../../components";
import { useDataContext } from "../../context";
import { CategorySlider } from "./CategorySlider";
import "./home.css";

function Home() {
	const { dataState } = useDataContext();
	const { videosData } = dataState;

	return (
		<div className="home__container">
			<CategorySlider />
			<div className="videos__container">
				{videosData.map((video) => (
					<VideoCard key={video._id} video={video} />
				))}
			</div>
		</div>
	);
}

export { Home };
