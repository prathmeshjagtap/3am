import axios from "axios";
import { urlConstants } from "../constants";
import { actionConstants } from "../constants";
import { toast } from "react-toastify";

const getPlaylistData = async (dispatch, token) => {
	dispatch({
		type: actionConstants.LOADING,
	});
	try {
		const response = await axios.get(urlConstants.PLAYLIST, {
			headers: {
				authorization: token,
			},
		});
		dispatch({
			type: actionConstants.PLAYLIST_DATA,
			payload: response.data.playlists,
		});
	} catch (error) {
		if (error.response.status === 500) {
			toast.error("Please Login", {
				position: "top-right",
				autoClose: 2000,
			});
		} else {
			toast.error("Server Error Get Playlist", {
				position: "top-right",
				autoClose: 2000,
			});
		}
	}
};

const postPlaylistData = async (newPlaylist, dispatch, token) => {
	dispatch({
		type: actionConstants.LOADING,
	});
	try {
		const response = await axios.post(
			urlConstants.PLAYLIST,
			{
				playlist: newPlaylist,
			},
			{
				headers: {
					authorization: token,
				},
			}
		);

		dispatch({
			type: actionConstants.PLAYLIST_DATA,
			payload: response.data.playlists,
		});
		toast.success("Playlist Created ", {
			position: "top-right",
			autoClose: 2000,
		});
	} catch (error) {
		if (error.response.status === 500) {
			toast.error("Please Login", {
				position: "top-right",
				autoClose: 2000,
			});
		} else {
			toast.error("Failed to Create Playlist", {
				position: "top-right",
				autoClose: 2000,
			});
		}
	}
};

const deletePlaylist = async (playlistID, dispatch, token) => {
	dispatch({
		type: actionConstants.LOADING,
	});

	try {
		const response = await axios.delete(
			`/api/user/playlists/${playlistID}`,

			{
				headers: {
					authorization: token,
				},
			}
		);

		dispatch({
			type: actionConstants.PLAYLIST_DATA,
			payload: response.data.playlists,
		});
		toast.warn("Playlist Deleted ", {
			position: "top-right",
			autoClose: 2000,
		});
	} catch (error) {
		if (error.response.status === 500) {
			toast.error("Please Login", {
				position: "top-right",
				autoClose: 2000,
			});
		} else {
			toast.error("Failed to Delete Playlist", {
				position: "top-right",
				autoClose: 2000,
			});
		}
	}
};

const getPlaylistByID = async (playlistID, token) => {
	try {
		const response = await axios.get(`/api/user/playlists/${playlistID}`, {
			headers: {
				authorization: token,
			},
		});
		return response.data.playlist;
	} catch (error) {
		console.error(error);
	}
};

const postPlaylistDataByID = async (playlistID, video, dispatch, token) => {
	dispatch({
		type: actionConstants.LOADING,
	});
	try {
		const response = await axios.post(
			`/api/user/playlists/${playlistID}`,
			{
				video,
			},
			{
				headers: {
					authorization: token,
				},
			}
		);

		dispatch({
			type: actionConstants.SINGLE_PLAYLIST,
			payload: response.data.playlist,
		});
		toast.success("Video Added to Playlist ", {
			position: "top-right",
			autoClose: 1000,
		});
	} catch (error) {
		toast.error("Failed to Add video to Playlist", {
			position: "top-right",
			autoClose: 2000,
		});
	}
};

const deletePlaylistVideo = async (playlistID, videoID, dispatch, token) => {
	dispatch({
		type: actionConstants.LOADING,
	});

	try {
		const response = await axios.delete(
			`/api/user/playlists/${playlistID}/${videoID}`,

			{
				headers: {
					authorization: token,
				},
			}
		);

		dispatch({
			type: actionConstants.SINGLE_PLAYLIST,
			payload: response.data.playlist,
		});
		toast.success("Deleted video from Playlist ", {
			position: "top-right",
			autoClose: 2000,
		});
	} catch (error) {
		toast.error("Failed to Delete video from Playlist", {
			position: "top-right",
			autoClose: 2000,
		});
	}
};

export {
	getPlaylistData,
	postPlaylistData,
	deletePlaylist,
	getPlaylistByID,
	postPlaylistDataByID,
	deletePlaylistVideo,
};
