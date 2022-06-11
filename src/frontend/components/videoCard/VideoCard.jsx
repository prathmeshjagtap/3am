import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./videoCard.css";
import {
	deleteWatchLaterData,
	postLikeData,
	deleteLikesData,
	postWatchLaterData,
	postHistoryData,
} from "../../services";
import { useActionContext, useAuthContext } from "../../context";
import { PlaylistModal } from "../index";

function VideoCard({ video }) {
	const [videoActions, setVideoActions] = useState(false);
	const [modal, setModal] = useState(false);
	const [hover, setHover] = useState(false);
	const { actionState, actionDispatch } = useActionContext();
	const { dataLikes, dataWatchLater } = actionState;
	const { authState } = useAuthContext();
	const { token } = authState;

	return (
		<>
			<div
				className="video__card"
				onClick={() => {
					postHistoryData(video, actionDispatch, token);
				}}
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => {
					setHover(false);
					if (setVideoActions) {
						setVideoActions(false);
					}
				}}
			>
				<Link to={`/video/${video._id}`}>
					<img
						alt={video.title}
						src={
							hover
								? video.dynamicImg
								: `https://img.youtube.com/vi/${video._id}/maxresdefault.jpg`
						}
						className="video__card-image"
					/>
				</Link>

				<div className="video__details__container">
					<div className="video__description__container">
						<p className="video__description">{video.title}</p>
						<i
							className="fas fa-ellipsis-v"
							onClick={(e) => {
								e.stopPropagation();
								setVideoActions((videoActions) => !videoActions);
							}}
						></i>
					</div>
					<p className="video__views">{video.views} views</p>
					{videoActions ? (
						<div className="video_actions_container">
							<div
								className="video__card__button"
								onClick={(e) => {
									e.stopPropagation();
									setModal(true);
								}}
							>
								<i className="fas fa-play-circle "></i>
								<p>Add to Playlist</p>
							</div>
							{dataWatchLater?.find((item) => item._id === video._id) ? (
								<div
									className="video__card__button delete__btn"
									onClick={(e) => {
										e.stopPropagation();
										deleteWatchLaterData(video._id, actionDispatch, token);
									}}
								>
									<i className="fas fa-trash-alt"></i>
									<p> Remove Watch L</p>
								</div>
							) : (
								<div
									className="video__card__button "
									onClick={(e) => {
										e.stopPropagation();
										postWatchLaterData(video, actionDispatch, token);
									}}
								>
									<i className="fas fa-clock"></i>
									<p>Watch later</p>
								</div>
							)}
							{dataLikes.find((item) => item._id === video._id) ? (
								<div
									className="video__card__button delete__btn"
									onClick={(e) => {
										e.stopPropagation();
										deleteLikesData(video._id, actionDispatch, token);
									}}
								>
									<i className="fas fa-trash-alt"></i>
									<p>Remove Liked</p>
								</div>
							) : (
								<div
									className="video__card__button"
									onClick={(e) => {
										e.stopPropagation();
										postLikeData(video, actionDispatch, token);
									}}
								>
									<i className="fas fa-heart "></i>
									<p>Add to Liked</p>
								</div>
							)}
						</div>
					) : null}
				</div>
			</div>
			{modal ? <PlaylistModal setModal={setModal} video={video} /> : null}
		</>
	);
}

export { VideoCard };
