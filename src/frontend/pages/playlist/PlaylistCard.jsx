import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useActionContext, useAuthContext } from "../../context";
import { deletePlaylist } from "../../services";
import Empty_Playlist_Image from "../../assets/videoImages/Empty.png";

function PlaylistCard({ playlist }) {
	const [deleteVideo, setDeleteVideo] = useState(false);
	const { actionDispatch } = useActionContext();
	const {
		authState: { token },
	} = useAuthContext();
	return (
		<div className="playlist__card">
			<Link to={`/playlist/${playlist._id}`}>
				{playlist.videos.length === 0 ? (
					<img
						src={Empty_Playlist_Image}
						className="playlist__card__image"
						alt="Empty_playlist"
					/>
				) : (
					<img
						src={`https://img.youtube.com/vi/${playlist.videos[0]._id}/maxresdefault.jpg`}
						className="playlist__card__image"
						alt={playlist.title}
					/>
				)}
			</Link>

			<div className="playlist__description">
				<h2 className="playlist__card__title">{playlist.title}</h2>
				<i
					className="fas fa-ellipsis-v"
					onClick={() => setDeleteVideo(!deleteVideo)}
				></i>
			</div>
			{deleteVideo ? (
				<div
					className="playlist__card__button"
					onClick={() => deletePlaylist(playlist._id, actionDispatch, token)}
				>
					<i className="fas fa-trash-alt"></i>
					<p>Delete Playlist</p>
				</div>
			) : null}
		</div>
	);
}

export { PlaylistCard };
