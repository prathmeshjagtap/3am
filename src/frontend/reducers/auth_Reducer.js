import { authConstants } from "../constants";
const auth_Reducer = (state, action) => {
	switch (action.type) {
		case authConstants.AUTHENTICATION:
			return {
				...state,
				token: action.payload1,
				userInfo: action.payload2,
				isAuth: true,
			};
		case authConstants.ERROR:
			return { ...state, error: action.payload };
		case authConstants.LOGOUT:
			return {
				...state,
				isAuth: false,
				loading: false,
				userInfo: null,
				token: null,
			};
		default:
			return state;
	}
};

export { auth_Reducer };
