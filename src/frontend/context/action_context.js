import { useContext, createContext, useReducer } from "react";
import { actions_reducer } from "../reducers";

const actionContext = createContext(null);

const useActionContext = () => useContext(actionContext);

function ActionProvider({ children }) {
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

	return (
		<actionContext.Provider value={{ actionState, actionDispatch }}>
			{children}
		</actionContext.Provider>
	);
}

export { ActionProvider, useActionContext };
