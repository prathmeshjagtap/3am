import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context";

function PrivateRoute({ children }) {
	const { authState } = useAuthContext();
	const { token } = authState;
	const location = useLocation();
	return token ? (
		children
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
}

export { PrivateRoute };
