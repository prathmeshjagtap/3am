import { actionConstants } from "../constants";

const actions_reducer = (state, action) => {
	switch (action.type) {
		case actionConstants.LOADING:
			return { ...state, loading: true };
		case actionConstants.LIKES_DATA:
			return {
				...state,
				dataLikes: action.payload,
				error: true,
				loading: false,
			};
		case actionConstants.HISTORY_DATA:
			return {
				...state,
				dataHistory: action.payload,
				error: false,
				loading: false,
			};
		case actionConstants.PLAYLIST_DATA:
			return {
				...state,
				dataPlaylist: action.payload,
				error: false,
				loading: false,
			};
		case actionConstants.WATCH_LATER:
			return {
				...state,
				dataWatchLater: action.payload,
				error: false,
				loading: false,
			};
		case actionConstants.ERROR:
			return {
				...state,
				error: action.payload,
				loading: false,
				dataLikes: [],
				dataHistory: [],
				dataPlaylist: [],
			};
		default:
			return state;
	}
};

export { actions_reducer };
