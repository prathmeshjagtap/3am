import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../components/videoCard/videoCard.css";
import {
	deleteWatchLaterData,
	postWatchLaterData,
	deleteHistoryData,
} from "../../services";
import { useActionContext, useAuthContext } from "../../context";
import { PlaylistModal } from "../../components";

function HistoryCard({ video }) {
	const [videoActions, setVideoActions] = useState(false);
	const [hover, setHover] = useState(false);
	const {
		actionState: { dataWatchLater },
		actionDispatch,
	} = useActionContext();
	const [modal, setModal] = useState(false);
	const {
		authState: { token },
	} = useAuthContext();

	return (
		<>
			<div
				className="video__card"
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
							onClick={() => setVideoActions(!videoActions)}
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
									onClick={() =>
										postWatchLaterData(video, actionDispatch, token)
									}
								>
									<i className="fas fa-clock"></i>
									<p>Watch later</p>
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

export { HistoryCard };
