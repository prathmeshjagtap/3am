import axios from "axios";
import { dataConstants } from "../constants";

const getVideos = async (dispatch) => {
	dispatch({
		type: dataConstants.LOADING,
	});
	try {
		const response = await axios.get("/api/videos");
		dispatch({
			type: dataConstants.GET_VIDEOS,
			payload: response.data.videos,
		});
	} catch (error) {
		dispatch({
			type: dataConstants.ERROR,
			payload: error,
		});
	}
};

const getCategories = async (dispatch) => {
	dispatch({
		type: dataConstants.LOADING,
	});
	try {
		const response = await axios.get("/api/categories");
		dispatch({
			type: dataConstants.GET_CATEGORIES,
			payload: response.data.categories,
		});
	} catch (error) {
		dispatch({
			type: dataConstants.ERROR,
			payload: error,
		});
	}
};

export { getVideos, getCategories };
