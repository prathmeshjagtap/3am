import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context";

function PrivateRoute({ children }) {
	const { authState } = useAuthContext();
	const { isAuth } = authState;
	console.log(isAuth);
	return isAuth ? children : <Navigate to="/login" replace />;
}

export { PrivateRoute };
