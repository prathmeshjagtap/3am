import axios from "axios";
import { urlConstants } from "../constants";
import { actionConstants } from "../constants";

const getHistoryData = async (dispatch, token) => {
	dispatch({
		type: actionConstants.LOADING,
	});
	try {
		const response = await axios.get(urlConstants.HISTORY, {
			headers: {
				authorization: token,
			},
		});

		dispatch({
			type: actionConstants.HISTORY_DATA,
			payload: response.data.history,
		});
	} catch (error) {
		dispatch({
			type: actionConstants.ERROR,
			payload: error,
		});
	}
};

const postHistoryData = async (video, dispatch, token) => {
	dispatch({
		type: actionConstants.LOADING,
	});
	try {
		const response = await axios.post(
			urlConstants.HISTORY,
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
			type: actionConstants.HISTORY_DATA,
			payload: response.data.history,
		});
	} catch (error) {
		dispatch({
			type: actionConstants.ERROR,
			payload: error,
		});
	}
};

const deleteHistoryData = async (id, dispatch, token) => {
	dispatch({
		type: actionConstants.LOADING,
	});

	try {
		const response = await axios.delete(
			`/api/user/history/${id}`,

			{
				headers: {
					authorization: token,
				},
			}
		);

		dispatch({
			type: actionConstants.HISTORY_DATA,
			payload: response.data.history,
		});
	} catch (error) {
		dispatch({
			type: actionConstants.ERROR,
			payload: error,
		});
	}
};

const clearHistory = async (dispatch, token) => {
	dispatch({
		type: actionConstants.LOADING,
	});

	try {
		const response = await axios.delete(
			"/api/user/history/all",

			{
				headers: {
					authorization: token,
				},
			}
		);

		dispatch({
			type: actionConstants.HISTORY_DATA,
			payload: response.data.history,
		});
	} catch (error) {
		dispatch({
			type: actionConstants.ERROR,
			payload: error,
		});
	}
};

export { getHistoryData, postHistoryData, deleteHistoryData, clearHistory };
