import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuthContext, useActionContext } from "../../context";
import { deletePlaylistVideo, postHistoryData } from "../../services";

function PlaylistFolder() {
	const { playlistId } = useParams();
	const [deleteVideo, setDeleteVideo] = useState(false);

	const {
		actionState: { dataPlaylist },
		actionDispatch,
	} = useActionContext();
	const {
		authState: { token },
	} = useAuthContext();

	const singlePlaylist = dataPlaylist.find((item) => item._id === playlistId);

	return singlePlaylist && singlePlaylist.videos.length > 0 ? (
		<div className="playlist__container">
			{singlePlaylist.videos.map((item) => (
				<div className="playlist__card" key={item._id}>
					<Link
						to={`/video/${item._id}`}
						onClick={() => postHistoryData(item, actionDispatch, token)}
					>
						<img
							src={`https://img.youtube.com/vi/${item._id}/maxresdefault.jpg`}
							className="playlist__card__image"
							alt="on"
						/>
					</Link>

					<div className="playlist__description">
						<h2 className="playlist__card__title">{item.title}</h2>
						<i
							className="fas fa-ellipsis-v"
							onClick={() => setDeleteVideo(!deleteVideo)}
						></i>
					</div>
					{deleteVideo ? (
						<div
							className="playlist__card__button"
							onClick={() =>
								deletePlaylistVideo(playlistId, item._id, actionDispatch, token)
							}
						>
							<i className="fas fa-trash-alt"></i>
							<p>Delete video</p>
						</div>
					) : null}
				</div>
			))}
		</div>
	) : (
		<h3 className="empty__page">
			you have No videos in this Playlist
			<Link className="link" to="/">
				Explore Videos
			</Link>
		</h3>
	);
}

export { PlaylistFolder };
