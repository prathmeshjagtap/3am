import React from "react";
import { useActionContext, useAuthContext } from "../../context";
import { HistoryCard } from "./HistoryCard";
import { Link } from "react-router-dom";
import { clearHistory } from "../../services";
import "./history.css";

function History() {
	const {
		authState: { token },
	} = useAuthContext();
	const { actionState, actionDispatch } = useActionContext();
	const { dataHistory } = actionState;
	return (
		<div>
			{dataHistory.length !== 0 ? (
				<div className="history__container">
					<button
						className="btn btn-primary btn__clear"
						onClick={() => clearHistory(actionDispatch, token)}
					>
						Clear History
					</button>
					<div className="videos__container">
						{dataHistory.map((video) => (
							<HistoryCard key={video._id} video={video} />
						))}
					</div>
				</div>
			) : (
				<h3 className="empty__page">
					you have No watched items
					<Link className="link" to="/">
						Explore Videos
					</Link>
				</h3>
			)}
		</div>
	);
}

export { History };
