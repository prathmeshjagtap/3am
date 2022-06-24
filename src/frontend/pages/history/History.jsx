import React, { useEffect } from "react";
import { useActionContext, useAuthContext } from "../../context";
import { HistoryCard } from "./HistoryCard";
import { Link } from "react-router-dom";
import { clearHistory, getHistoryData } from "../../services";
import "./history.css";

function History() {
	const {
		authState: { token },
	} = useAuthContext();
	const { actionState, actionDispatch } = useActionContext();
	const { dataHistory } = actionState;

	useEffect(() => {
		if (token) {
			getHistoryData(actionDispatch, token);
		}
	}, [token, actionDispatch]);
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
				<div className="empty__page">
					<h2>you have no watched videos</h2>
					<Link className="link" to="/">
						Explore Videos
					</Link>
				</div>
			)}
		</div>
	);
}

export { History };
