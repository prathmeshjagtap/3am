import React, { useState } from "react";
import "./playlistModal.css";
import {
	postPlaylistData,
	postPlaylistDataByID,
	deletePlaylistVideo,
} from "../../services";
import { useActionContext, useAuthContext } from "../../context";

function PlaylistModal({ setModal, video }) {
	const [inputVisible, setInputVisible] = useState(false);
	const [addPlaylist, setAddPlaylist] = useState({
		title: "",
		description: "",
	});
	const {
		actionState: { dataPlaylist },
		actionDispatch,
	} = useActionContext();
	const {
		authState: { token },
	} = useAuthContext();
	return (
		<div className="modal__container">
			<div className="playlist__modal">
				<div className="playlist__title_actions">
					<h2 className="playlist__title">Save to...</h2>
					<i
						className="fas fa-times close__modal"
						onClick={() => setModal(false)}
					></i>
				</div>
				<div className="playlist__list">
					{dataPlaylist.length !== 0
						? dataPlaylist.map((playlist) => (
								<li key={playlist._id}>
									<input
										type="checkbox"
										checked={playlist.videos.some(
											(item) => item._id === video._id
										)}
										onChange={(e) =>
											e.target.checked
												? postPlaylistDataByID(
														playlist._id,
														video,
														actionDispatch,
														token
												  )
												: deletePlaylistVideo(
														playlist._id,
														video._id,
														actionDispatch,
														token
												  )
										}
									/>
									<span>{playlist.title}</span>
								</li>
						  ))
						: null}
				</div>
				<div className="playlist__actions">
					{inputVisible ? (
						<>
							<input
								type="text"
								placeholder="Enter Playlist Name"
								className="playlist__input"
								onChange={(e) =>
									setAddPlaylist({ ...addPlaylist, title: e.target.value })
								}
							/>
							<input
								type="text"
								placeholder="Enter Playlist Description"
								className="playlist__input"
								onChange={(e) =>
									setAddPlaylist({
										...addPlaylist,
										description: e.target.value,
									})
								}
							/>
							<button
								className="btn btn-primary playlist__button"
								onClick={() =>
									postPlaylistData(addPlaylist, actionDispatch, token)
								}
							>
								Create Playlist
							</button>
						</>
					) : (
						<button
							className="btn btn-primary playlist__button"
							onClick={() => setInputVisible(true)}
						>
							+ Create New Playlist
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export { PlaylistModal };
