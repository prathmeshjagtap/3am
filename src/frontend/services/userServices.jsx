import axios from "axios";
import { authConstants } from "../constants";

const loginHandler = async (e, email, password, dispatch, navigate) => {
	e.preventDefault();
	try {
		const response = await axios.post(`/api/auth/login`, {
			email,
			password,
		});

		localStorage.setItem("token", response.data.encodedToken);
		dispatch({
			type: authConstants.AUTHENTICATION,
			payload1: response.data.encodedToken,
			payload2: response.data.foundUser,
		});

		navigate("/");
	} catch (err) {
		dispatch({
			type: authConstants.ERROR,
			payload: err,
		});
		console.log(err);
	}
};

const signupHandler = async (
	e,
	firstName,
	lastName,
	email,
	password,
	dispatch,
	navigate
) => {
	e.preventDefault();
	try {
		const response = await axios.post(`/api/auth/signup`, {
			firstName,
			lastName,
			email,
			password,
		});

		localStorage.setItem("token", response.data.encodedToken);

		dispatch({
			type: authConstants.AUTHENTICATION,
			payload1: response.data.encodedToken,
			payload2: response.data.createdUser,
		});
		navigate("/");
	} catch (err) {
		dispatch({
			type: authConstants.ERROR,
			payload: "Could not Signup ",
		});
		console.log(err);
	}
};

const logoutHandler = (e, dispatch, navigate) => {
	e.preventDefault();
	localStorage.removeItem("token");
	dispatch({
		type: authConstants.LOGOUT,
	});
	navigate("/");
};
export { loginHandler, signupHandler, logoutHandler };
