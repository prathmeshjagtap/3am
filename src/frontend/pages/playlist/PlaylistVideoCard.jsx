import React, { useState } from "react";
import { useActionContext, useAuthContext } from "../../context";
import { postHistoryData, deletePlaylistVideo } from "../../services";
import { Link, useParams } from "react-router-dom";
function PlaylistVideoCard({ video }) {
	const [deleteVideo, setDeleteVideo] = useState(false);
	const { playlistId } = useParams();
	const { actionDispatch } = useActionContext();
	const {
		authState: { token },
	} = useAuthContext();
	return (
		<div
			className="playlist__card"
			key={video._id}
			onMouseLeave={() => setDeleteVideo(false)}
		>
			<Link
				to={`/video/${video._id}`}
				onClick={() => postHistoryData(video, actionDispatch, token)}
			>
				<img
					src={`https://img.youtube.com/vi/${video._id}/maxresdefault.jpg`}
					className="playlist__card__image"
					alt="on"
				/>
			</Link>

			<div className="playlist__description">
				<h2 className="playlist__card__title">{video.title}</h2>
				<i
					className="fas fa-ellipsis-v"
					onClick={() => setDeleteVideo(!deleteVideo)}
				></i>
			</div>
			{deleteVideo ? (
				<div
					className="playlist__card__button"
					onClick={() =>
						deletePlaylistVideo(playlistId, video._id, actionDispatch, token)
					}
				>
					<i className="fas fa-trash-alt"></i>
					<p>Delete video</p>
				</div>
			) : null}
		</div>
	);
}

export { PlaylistVideoCard };
