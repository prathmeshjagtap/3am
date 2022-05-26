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
		<div className="home__container">
			<CategorySlider />
			<div className="videos__container">
				{!loading ? (
					videos && videos.length !== 0 ? (
						videos.map((video) => <VideoCard key={video._id} video={video} />)
					) : (
						<h1 className="videos__container__empty">
							Video not availabe which you Searched
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
								See Available Videos
							</button>
						</h1>
					)
				) : (
					<div className="loader"></div>
				)}
			</div>
		</div>
	);
}

export { Home };
