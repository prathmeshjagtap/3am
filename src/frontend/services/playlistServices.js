import axios from "axios";
import { urlConstants } from "../constants";
import { actionConstants } from "../constants";

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
		dispatch({
			type: actionConstants.ERROR,
			payload: error,
		});
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
	} catch (error) {
		dispatch({
			type: actionConstants.ERROR,
			payload: error,
		});
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
	} catch (error) {
		dispatch({
			type: actionConstants.ERROR,
			payload: error,
		});
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
	} catch (error) {
		dispatch({
			type: actionConstants.ERROR,
			payload: error,
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
	} catch (error) {
		dispatch({
			type: actionConstants.ERROR,
			payload: error,
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
