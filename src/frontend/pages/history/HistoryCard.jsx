import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../components/videoCard/videoCard.css";
import {
	deleteWatchLaterData,
	postWatchLaterData,
	deleteHistoryData,
} from "../../services";
import { useActionContext, useAuthContext } from "../../context";

function HistoryCard({ video }) {
	const [videoActions, setVideoActions] = useState(false);
	const {
		actionState: { dataWatchLater },
		actionDispatch,
	} = useActionContext();

	const {
		authState: { token },
	} = useAuthContext();

	return (
		<div className="video__card">
			<Link to={`/video/${video._id}`}>
				<img
					alt={video.title}
					src={`https://img.youtube.com/vi/${video._id}/maxresdefault.jpg`}
					className="video__card-image"
				/>
			</Link>

			<div className="video__details__container">
				<div className="video__description__container">
					<p className="video__description">{video.title}</p>
					<i
						className="fas fa-ellipsis-v"
						onClick={() => setVideoActions(!videoActions)}
					></i>
				</div>
				<p className="video__views">{video.views} views</p>
				{videoActions ? (
					<div className="video_actions_container">
						<div className="video__card__button">
							<i className="fas fa-play-circle "></i>
							<p>Add to Playlist</p>
						</div>
						<div
							className="video__card__button delete__btn"
							onClick={() =>
								deleteHistoryData(video._id, actionDispatch, token)
							}
						>
							<i className="fas fa-trash-alt"></i>
							<p>Delete History</p>
						</div>
						{dataWatchLater?.find((item) => item._id === video._id) ? (
							<div
								className="video__card__button delete__btn"
								onClick={() =>
									deleteWatchLaterData(video._id, actionDispatch, token)
								}
							>
								<i className="fas fa-trash-alt"></i>
								<p>Remove Watch Later</p>
							</div>
						) : (
							<div
								className="video__card__button "
								onClick={() => postWatchLaterData(video, actionDispatch, token)}
							>
								<i className="fas fa-clock"></i>
								<p>Watch later</p>
							</div>
						)}
					</div>
				) : null}
			</div>
		</div>
	);
}

export { HistoryCard };
