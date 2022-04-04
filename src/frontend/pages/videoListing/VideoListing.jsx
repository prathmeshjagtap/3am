import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./videolisting.css";
import VideoScroll from "./VideoScroll";
import { useActionContext, useAuthContext } from "../../context";
import {
	deleteWatchLaterData,
	postLikeData,
	deleteLikesData,
	postWatchLaterData,
} from "../../services";
import { PlaylistModal } from "../../components";

function VideoListing() {
	const { videoId } = useParams();
	const [video, setVideo] = useState("");
	const [modal, setModal] = useState(false);
	const { actionState, actionDispatch } = useActionContext();
	const { dataLikes, dataWatchLater } = actionState;
	const {
		authState: { token },
	} = useAuthContext();

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(`/api/video/${videoId}`);
				setVideo(response.data.video);
			} catch (error) {
				console.log(error);
			}
		})();
	}, [videoId, video]);

	return (
		<>
			<div className="video__page__continaer">
				<div className="video__container">
					<div className="playing__video">
						<iframe
							className="video__iframe"
							src={`https://www.youtube-nocookie.com/embed/${videoId}/?autoplay=1`}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
							allowFullScreen
						></iframe>
					</div>

					<h3 className="video__title">{video.title}</h3>
					<div className="video__details">
						<p className="video__views">{video.views} views</p>
						<div className="video__actions">
							{dataLikes.find((item) => item._id === video._id) ? (
								<i
									className="fas fa-heart color__red"
									onClick={() =>
										deleteLikesData(video._id, actionDispatch, token)
									}
								></i>
							) : (
								<i
									className="far fa-heart"
									onClick={() => postLikeData(video, actionDispatch, token)}
								></i>
							)}

							<div onClick={() => setModal(true)}>
								<i className="fas fa-folder-plus"></i>
								<span>Save</span>
							</div>

							{dataWatchLater.find((item) => item._id === video._id) ? (
								<div
									className="color__primary"
									onClick={() =>
										deleteWatchLaterData(video._id, actionDispatch, token)
									}
								>
									<i className="fas fa-clock "></i>
									<p>Added</p>
								</div>
							) : (
								<div
									onClick={() =>
										postWatchLaterData(video, actionDispatch, token)
									}
								>
									<i className="fas fa-clock "></i>
									<span>Watch later</span>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="aside__right__Videos">
					<h1>More Videos</h1>
					<VideoScroll video={video} />
				</div>
			</div>
			{modal ? <PlaylistModal setModal={setModal} video={video} /> : null}
		</>
	);
}

export { VideoListing };
