import axios from "axios";
import { authConstants } from "../constants";
import { toast } from "react-toastify";

const loginHandler = async (
	e,
	email,
	password,
	dispatch,
	navigate,
	location
) => {
	e.preventDefault();
	let from = location.state?.from?.pathname || "/";
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
		navigate(from, { replace: true });
		toast.success("Logged in Successfully ", {
			position: "top-right",
			autoClose: 2000,
		});
	} catch (error) {
		if (error.response.status === 404) {
			toast.error("Wrong Email", {
				position: "top-right",
				autoClose: 2000,
			});
		} else if (error.response.status === 401) {
			toast.error("Invalid Credentials", {
				position: "top-center",
				autoClose: 2000,
			});
		} else {
			toast.error("Server Error", {
				position: "bottom-center",
				autoClose: 2000,
			});
		}
	}
};

const signupHandler = async (
	firstName,
	lastName,
	email,
	password,
	dispatch,
	navigate,
	location
) => {
	let from = location.state?.from?.pathname || "/";
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
		toast.success("Sign in Successfully ", {
			position: "top-right",
			autoClose: 2000,
		});
		navigate(from, { replace: true });
	} catch (error) {
		if (error.response.status === 422) {
			toast.error("Email Already Exists", {
				position: "top-right",
				autoClose: 2000,
			});
		} else {
			toast.error("Server Error", {
				position: "bottom-center",
				autoClose: 2000,
			});
		}
	}
};

const logoutHandler = (e, dispatch, navigate) => {
	e.preventDefault();
	localStorage.removeItem("token");
	dispatch({
		type: authConstants.LOGOUT,
	});
	navigate("/");
	toast.success("Logout Successfully ", {
		position: "top-right",
		autoClose: 2000,
	});
};
export { loginHandler, signupHandler, logoutHandler };
