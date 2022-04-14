import { createContext, useContext, useReducer, useEffect } from "react";
import { getVideos, getCategories } from "../services";
import { data_Reducer } from "../reducers";

const dataContext = createContext(null);

const useDataContext = () => useContext(dataContext);

function DataProvider({ children }) {
	const [dataState, dataDispatch] = useReducer(data_Reducer, {
		videosData: [],
		categoriesData: [],
		error: false,
		loading: false,
	});

	useEffect(() => {
		getVideos(dataDispatch);
		getCategories(dataDispatch);
	}, []);

	return (
		<dataContext.Provider value={{ dataState, dataDispatch }}>
			{children}
		</dataContext.Provider>
	);
}

export { DataProvider, useDataContext };
