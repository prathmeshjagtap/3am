import React from "react";
import { useActionContext } from "../../context";
import "./like.css";
import { Link } from "react-router-dom";
import { VideoCard } from "../../components";

function Liked() {
	const { actionState } = useActionContext();
	const { dataLikes } = actionState;

	return (
		<div className="likes__video__container">
			{dataLikes.length !== 0 ? (
				<div className="videos__container">
					{dataLikes.map((video) => (
						<VideoCard key={video._id} video={video} />
					))}
				</div>
			) : (
				<h3 className="empty__page">
					you have 0 liked Vides
					<Link className="link" to="/">
						Explore Videos
					</Link>
				</h3>
			)}
		</div>
	);
}

export { Liked };
