import React from "react";
import { Link } from "react-router-dom";
import { useActionContext } from "../../context";
import "./playlist.css";
import { PlaylistCard } from "./PlaylistCard";

function Playlist() {
	const {
		actionState: { dataPlaylist },
	} = useActionContext();

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
