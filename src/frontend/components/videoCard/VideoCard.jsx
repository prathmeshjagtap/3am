import React, { useState } from "react";
import "./videoCard.css";

function VideoCard({ video }) {
	const [videoActions, setVideoActions] = useState(false);

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
						<div className="video__card__button">
							<i className="fas fa-heart "></i>
							<p>Add to Liked</p>
						</div>
					</div>
				) : null}
			</div>
			{!videoActions ? (
				<>
					<div className="video__card__button  display-none">
						<i className="fas fa-clock"></i>
						<p>Watch Later</p>
					</div>
					<div className="video__card__button display-none">
						<i className="fas fa-heart "></i>
						<p>Add to Liked</p>
					</div>
				</>
			) : null}
		</div>
	);
}

export { VideoCard };
