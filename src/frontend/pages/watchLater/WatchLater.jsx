import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useActionContext, useAuthContext } from "../../context";
import { VideoCard } from "../../components";
import "../likedVideos/like.css";
import { getWatchLaterData } from "../../services";

function WatchLater() {
	const {
		actionState: { dataWatchLater },
		actionDispatch,
	} = useActionContext();
	const {
		authState: { token },
	} = useAuthContext();

	useEffect(() => {
		if (token) {
			getWatchLaterData(actionDispatch, token);
		}
	}, [token, actionDispatch]);
	return (
		<div className="likes__video__container">
			{dataWatchLater?.length !== 0 ? (
				<div className="videos__container">
					{dataWatchLater?.map((video) => (
						<VideoCard key={video._id} video={video} />
					))}
				</div>
			) : (
				<div className="empty__page">
					<h2>you have no videos in watchlater</h2>
					<Link className="link" to="/">
						Explore Videos
					</Link>
				</div>
			)}
		</div>
	);
}

export { WatchLater };
