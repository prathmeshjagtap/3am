import React from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../../context";

function VideoScroll({ video }) {
	const { dataState } = useDataContext();
	const { videosData } = dataState;
	const filteredVideos = videosData.filter((item) => item._id !== video._id);

	return (
		<div className="video__slider">
			<div className="video__slider__items">
				{filteredVideos.map((video) => {
					return (
						<Link key={video._id} to={`/video/${video._id}`}>
							<img
								alt={video.title}
								src={video.staticImg}
								className="video__card-image"
							/>
							<p className="video__title__slider">{video.title}</p>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default VideoScroll;
