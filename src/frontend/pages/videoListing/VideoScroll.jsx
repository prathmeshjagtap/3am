import React from "react";
import { Link } from "react-router-dom";
import {
	useActionContext,
	useDataContext,
	useAuthContext,
} from "../../context";
import { postHistoryData } from "../../services";

function VideoScroll({ video }) {
	const { dataState } = useDataContext();
	const { videosData } = dataState;
	const { actionDispatch } = useActionContext();
	const {
		authState: { token },
	} = useAuthContext();

	const filteredVideos = videosData.filter((item) => item._id !== video._id);

	return (
		<div className="video__slider">
			<div className="video__slider__items">
				{filteredVideos.map((video) => {
					return (
						<Link
							to={`/video/${video._id}`}
							key={video._id}
							onClick={() => {
								postHistoryData(video, actionDispatch, token);
							}}
						>
							<img
								alt={video.title}
								src={`https://img.youtube.com/vi/${video._id}/maxresdefault.jpg`}
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
