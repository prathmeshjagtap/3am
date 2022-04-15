import axios from "axios";
import { urlConstants } from "../constants";
import { actionConstants } from "../constants";
import { toast } from "react-toastify";
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
		if (error.response.status === 500) {
			toast.error("Please Login", {
				position: "top-right",
				autoClose: 2000,
			});
		} else {
			toast.error("Server Error Get Likes", {
				position: "top-right",
				autoClose: 2000,
			});
		}
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
		toast.success("Video Added to Liked Videos", {
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
			toast.error("Failed to add Liked video", {
				position: "top-right",
				autoClose: 2000,
			});
		}
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
		toast.warn("Video Removed From Liked", {
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
			toast.error("Failed to Delete Liked video", {
				position: "top-right",
				autoClose: 2000,
			});
		}
	}
};

export { getLikesData, postLikeData, deleteLikesData };
