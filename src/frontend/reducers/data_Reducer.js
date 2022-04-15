import { dataConstants } from "../constants";

const data_Reducer = (state, action) => {
	switch (action.type) {
		case dataConstants.GET_VIDEOS:
			return { ...state, videosData: action.payload, loading: false };
		case dataConstants.GET_CATEGORIES:
			return { ...state, categoriesData: action.payload, loading: false };
		case dataConstants.ERROR:
			return { ...state, error: action.payload, loading: false };
		case dataConstants.LOADING:
			return { ...state, loading: true };
		default:
			return state;
	}
};

export { data_Reducer };
