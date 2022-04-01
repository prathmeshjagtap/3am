import axios from "axios";
import { urlConstants } from "../constants";
import { actionConstants } from "../constants";

const getLikesData = async (dispatch, token) => {
	dispatch({
		type: actionConstants.LOADING,
	});
	try {
		const response = await axios.get(urlConstants.LIKES, {
			headers: {
				authorization: token,
			},
		});

		dispatch({
			type: actionConstants.LIKES_DATA,
			payload: response.data.likes,
		});
	} catch (error) {
		dispatch({
			type: actionConstants.ERROR,
			payload: error,
		});
	}
};

const postLikeData = async (video, dispatch, token) => {
	dispatch({
		type: actionConstants.LOADING,
	});
	try {
		const response = await axios.post(
			urlConstants.LIKES,
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
			type: actionConstants.LIKES_DATA,
			payload: response.data.likes,
		});
	} catch (error) {
		dispatch({
			type: actionConstants.ERROR,
			payload: error,
		});
	}
};

const deleteLikesData = async (id, dispatch, token) => {
	dispatch({
		type: actionConstants.LOADING,
	});

	try {
		const response = await axios.delete(
			`/api/user/likes/${id}`,

			{
				headers: {
					authorization: token,
				},
			}
		);

		dispatch({
			type: actionConstants.LIKES_DATA,
			payload: response.data.likes,
		});
	} catch (error) {
		dispatch({
			type: actionConstants.ERROR,
			payload: error,
		});
	}
};

export { getLikesData, postLikeData, deleteLikesData };
