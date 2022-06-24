import React, { useEffect } from "react";
import { useActionContext, useAuthContext } from "../../context";
import "./like.css";
import { Link } from "react-router-dom";
import { VideoCard } from "../../components";
import { getLikesData } from "../../services";

function Liked() {
	const { actionState, actionDispatch } = useActionContext();
	const { dataLikes } = actionState;
	const {
		authState: { token },
	} = useAuthContext();

	useEffect(() => {
		if (token) {
			getLikesData(actionDispatch, token);
		}
	}, [token, actionDispatch]);

	return (
		<div className="likes__video__container">
			{dataLikes.length !== 0 ? (
				<div className="videos__container">
					{dataLikes.map((video) => (
						<VideoCard key={video._id} video={video} />
					))}
				</div>
			) : (
				<div className="empty__page">
					<h2>you have 0 liked videos</h2>
					<Link className="link" to="/">
						Explore Videos
					</Link>
				</div>
			)}
		</div>
	);
}

export { Liked };
