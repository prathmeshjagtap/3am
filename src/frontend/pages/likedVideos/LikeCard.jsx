import React, { useState } from "react";
import { useActionContext, useAuthContext } from "../../context";
import { deleteLikesData } from "../../services/";

function LikeCard({ video }) {
	const [videoActions, setVideoActions] = useState(false);
	const { actionDispatch } = useActionContext();
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
						<div className="video__card__button ">
							<i className="fas fa-clock"></i>
							<p>Watch Later</p>
						</div>
						<div
							className="video__card__button"
							onClick={() => deleteLikesData(video._id, actionDispatch, token)}
						>
							<i className="fas fa-trash-alt"></i>
							<p>Remove Liked</p>
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
}

export default LikeCard;
