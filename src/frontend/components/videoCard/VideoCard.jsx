import React, { useState } from "react";
import "./videoCard.css";
import {
	deleteWatchLaterData,
	postLikeData,
	deleteLikesData,
	postWatchLaterData,
} from "../../services";
import { useActionContext, useAuthContext } from "../../context";

function VideoCard({ video }) {
	const [videoActions, setVideoActions] = useState(false);
	const { actionState, actionDispatch } = useActionContext();
	const { dataLikes, dataWatchLater } = actionState;
	const { authState } = useAuthContext();
	const { token } = authState;

	return (
		<div className="video__card">
			<img
				alt={video.title}
				src={video.staticImg}
				className="video__card-image"
			/>
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
						{dataWatchLater.find((item) => item._id === video._id) ? (
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
						{dataLikes.find((item) => item._id === video._id) ? (
							<div
								className="video__card__button delete__btn"
								onClick={() =>
									deleteLikesData(video._id, actionDispatch, token)
								}
							>
								<i className="fas fa-trash-alt"></i>
								<p>Remove Liked</p>
							</div>
						) : (
							<div
								className="video__card__button"
								onClick={() => postLikeData(video, actionDispatch, token)}
							>
								<i className="fas fa-heart "></i>
								<p>Add to Liked</p>
							</div>
						)}
					</div>
				) : null}
			</div>
			{!videoActions ? (
				<>
					{dataWatchLater.find((item) => item._id === video._id) ? (
						<div
							className="video__card__button display-none delete__btn"
							onClick={() =>
								deleteWatchLaterData(video._id, actionDispatch, token)
							}
						>
							<i className="fas fa-trash-alt"></i>
							<p>Remove Watch Later</p>
						</div>
					) : (
						<div
							className="video__card__button display-none  "
							onClick={() => postWatchLaterData(video, actionDispatch, token)}
						>
							<i className="fas fa-clock"></i>
							<p>Watch later</p>
						</div>
					)}
					{dataLikes.find((item) => item._id === video._id) ? (
						<div
							className="video__card__button display-none delete__btn"
							onClick={() => deleteLikesData(video._id, actionDispatch, token)}
						>
							<i className="fas fa-trash-alt"></i>
							<p>Remove Liked</p>
						</div>
					) : (
						<div
							className="video__card__button display-none"
							onClick={() => postLikeData(video, actionDispatch, token)}
						>
							<i className="fas fa-heart "></i>
							<p>Add to Liked</p>
						</div>
					)}
				</>
			) : null}
		</div>
	);
}

export { VideoCard };
