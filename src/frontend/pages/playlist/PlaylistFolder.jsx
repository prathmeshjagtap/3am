import React from "react";
import { Link, useParams } from "react-router-dom";
import { useActionContext } from "../../context";
import { PlaylistVideoCard } from "./PlaylistVideoCard";

function PlaylistFolder() {
	const { playlistId } = useParams();

	const {
		actionState: { dataPlaylist },
	} = useActionContext();

	const singlePlaylist = dataPlaylist?.find((item) => item._id === playlistId);

	return singlePlaylist && singlePlaylist.videos.length > 0 ? (
		<div className="playlist__container">
			<div className="videos__container">
				{singlePlaylist.videos.map((item) => (
					<PlaylistVideoCard video={item} />
				))}
			</div>
		</div>
	) : (
		<div className="empty__page">
			<h2>you have no videos in this playlist</h2>
			<Link className="link" to="/">
				Explore Videos
			</Link>
		</div>
	);
}

export { PlaylistFolder };
