import { dataConstants } from "../constants";

const data_Reducer = (state, action) => {
	switch (action.type) {
		case dataConstants.GET_VIDEOS:
			return { ...state, videosData: action.payload };
		case dataConstants.GET_CATEGORIES:
			return { ...state, categoriesData: action.payload };
		case dataConstants.ERROR:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};

export { data_Reducer };
