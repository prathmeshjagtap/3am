import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useActionContext, useAuthContext } from "../../context";
import { getPlaylistData } from "../../services";
import "./playlist.css";
import { PlaylistCard } from "./PlaylistCard";

function Playlist() {
	const {
		actionState: { dataPlaylist },
		actionDispatch,
	} = useActionContext();
	const {
		authState: { token },
	} = useAuthContext();

	useEffect(() => {
		if (token) {
			getPlaylistData(actionDispatch, token);
		}
	}, [token, actionDispatch]);

	return (
		<div className="playlist__container">
			{dataPlaylist.length !== 0 ? (
				<div className="videos__container">
					{dataPlaylist.map((playlist) => (
						<PlaylistCard key={playlist._id} playlist={playlist} />
					))}
				</div>
			) : (
				<div className="empty__page">
					<h2>you have not created playlist</h2>
					<Link className="link" to="/">
						Explore Videos
					</Link>
				</div>
			)}
		</div>
	);
}

export { Playlist };
