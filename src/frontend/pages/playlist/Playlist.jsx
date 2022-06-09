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
		<div>
			{dataPlaylist.length !== 0 ? (
				<div className="playlist__container">
					{dataPlaylist.map((playlist) => (
						<PlaylistCard key={playlist._id} playlist={playlist} />
					))}
				</div>
			) : (
				<h3 className="empty__page">
					you have No Playlist Created
					<Link className="link" to="/">
						Explore Videos
					</Link>
				</h3>
			)}
		</div>
	);
}

export { Playlist };
