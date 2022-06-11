import axios from "axios";
import { urlConstants } from "../constants";
import { actionConstants } from "../constants";
import { toast } from "react-toastify";

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
		console.log(error);
		if (error?.response?.status === 500) {
			toast.error("Please Login", {
				position: "top-right",
				autoClose: 2000,
			});
		} else {
			toast.error("Server Error Watch Later", {
				position: "top-right",
				autoClose: 2000,
			});
		}
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
		toast.success("Video Added to WatchLater", {
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
			toast.error("Failed to add video", {
				position: "top-right",
				autoClose: 2000,
			});
		}
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
		toast.success("Video Removed From WatchLater", {
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
			toast.error("Failed to Remove video", {
				position: "top-right",
				autoClose: 2000,
			});
		}
	}
};

export { getWatchLaterData, postWatchLaterData, deleteWatchLaterData };
