import React from "react";
import LikeCard from "./LikeCard";
import { useActionContext } from "../../context";
import "./like.css";
import { Link } from "react-router-dom";

function Liked() {
	const { actionState } = useActionContext();
	const { dataLikes } = actionState;

	return (
		<div className="likes__video__container">
			{dataLikes.length !== 0 ? (
				<div className="videos__container">
					{dataLikes.map((video) => (
						<LikeCard key={video._id} video={video} />
					))}
				</div>
			) : (
				<h3 className="empty__page">
					No liked Video
					<Link className="link" to="/">
						Explore Videos
					</Link>
				</h3>
			)}
		</div>
	);
}

export { Liked };
