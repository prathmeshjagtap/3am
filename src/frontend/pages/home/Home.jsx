import React from "react";
import { VideoCard } from "../../components";
import { useActionContext, useDataContext } from "../../context";
import { searchVideo, sortByCategory } from "../../utils";
import { CategorySlider } from "./CategorySlider";
import { actionConstants } from "../../constants";
import "./home.css";

function Home() {
	const { dataState } = useDataContext();
	const { videosData, loading } = dataState;
	const {
		actionState: { category, search },
		actionDispatch,
	} = useActionContext();

	const sortData = sortByCategory([...videosData], category);
	const videos = searchVideo(sortData, search);

	return (
		<div>
			<CategorySlider />

			{!loading ? (
				videos && videos.length !== 0 ? (
					<div className="videos__container">
						{videos.map((video) => (
							<VideoCard key={video._id} video={video} />
						))}
					</div>
				) : (
					<div className="videos__container__empty  home__container">
						<h1>video not available which you searched</h1>
						<button
							className="btn btn-primary  btn-main"
							onClick={() => {
								actionDispatch({
									type: actionConstants.SEARCH_QUERY,
									payload: null,
								});
								actionDispatch({
									type: actionConstants.SET_CATEGORY,
									payload: "All",
								});
							}}
						>
							See available videos
						</button>
					</div>
				)
			) : (
				<div className="home__container">
					<div className="loader"></div>
				</div>
			)}
		</div>
	);
}

export { Home };
