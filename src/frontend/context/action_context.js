import { useContext, createContext, useReducer, useEffect } from "react";
import { actions_reducer } from "../reducers";
import {
	getHistoryData,
	getLikesData,
	getWatchLaterData,
	getPlaylistData,
} from "../services";
import { useAuthContext } from "./auth-context";

const actionContext = createContext(null);

const useActionContext = () => useContext(actionContext);

function ActionProvider({ children }) {
	const { authState } = useAuthContext();
	const { token } = authState;
	const [actionState, actionDispatch] = useReducer(actions_reducer, {
		loading: false,
		error: false,
		dataLikes: [],
		dataHistory: [],
		dataPlaylist: [],
		dataWatchLater: [],
		category: "All",
		search: null,
	});

	useEffect(() => {
		getLikesData(actionDispatch, token);
		getWatchLaterData(actionDispatch, token);
		getHistoryData(actionDispatch, token);
		getPlaylistData(actionDispatch, token);
	}, [token]);

	return (
		<actionContext.Provider value={{ actionState, actionDispatch }}>
			{children}
		</actionContext.Provider>
	);
}

export { ActionProvider, useActionContext };
