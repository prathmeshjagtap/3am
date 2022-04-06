import { actionConstants } from "../constants";

const actions_reducer = (state, action) => {
	let dataPlaylist = state.dataPlaylist;

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
		case actionConstants.SINGLE_PLAYLIST:
			dataPlaylist = dataPlaylist.filter(
				(item) => item._id !== action.payload._id
			);
			dataPlaylist = [...dataPlaylist, action.payload];
			return {
				...state,
				dataPlaylist: [...dataPlaylist],
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
			};
		case actionConstants.SET_CATEGORY: {
			return {
				...state,
				category: action.payload,
			};
		}
		case actionConstants.SEARCH_QUERY: {
			return {
				...state,
				search: action.payload,
			};
		}
		default:
			return state;
	}
};

export { actions_reducer };
