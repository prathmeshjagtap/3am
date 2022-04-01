import axios from "axios";
import { urlConstants } from "../constants";
import { actionConstants } from "../constants";

const getWatchLaterData = async (dispatch, token) => {
	dispatch({
		type: actionConstants.LOADING,
	});
	try {
		const response = await axios.get(urlConstants.WATCH_LATER, {
			headers: {
				authorization: token,
			},
		});

		dispatch({
			type: actionConstants.WATCH_LATER,
			payload: response.data.watchlater,
		});
	} catch (error) {
		dispatch({
			type: actionConstants.ERROR,
			payload: error,
		});
		console.error(error);
	}
};

const postWatchLaterData = async (video, dispatch, token) => {
	dispatch({
		type: actionConstants.LOADING,
	});
	try {
		const response = await axios.post(
			urlConstants.WATCH_LATER,
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
			type: actionConstants.WATCH_LATER,
			payload: response.data.watchlater,
		});
	} catch (error) {
		dispatch({
			type: actionConstants.ERROR,
			payload: error,
		});
		console.error(error);
	}
};

const deleteWatchLaterData = async (id, dispatch, token) => {
	dispatch({
		type: actionConstants.LOADING,
	});
	try {
		const response = await axios.delete(
			`/api/user/watchlater/${id}`,

			{
				headers: {
					authorization: token,
				},
			}
		);
		dispatch({
			type: actionConstants.WATCH_LATER,
			payload: response.data.watchlater,
		});
	} catch (error) {
		dispatch({
			type: actionConstants.ERROR,
			payload: error,
		});
		console.error(error);
	}
};

export { getWatchLaterData, postWatchLaterData, deleteWatchLaterData };
