import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context";
import "../login/authForms.css";
import { signupHandler } from "../../services";

function Signup() {
	const navigate = useNavigate();
	const location = useLocation();
	const { authDispatch } = useAuthContext();
	const [passwordVisibility, setPasswordVisibility] = useState("password");
	const [passwordVisibilityIcon, setPasswordVisibilityIcon] =
		useState("fas fa-eye-slash");

	const [userDetail, setUserDetail] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});

	const passwordVisibilityHandler = () => {
		if (passwordVisibility === "password") {
			setPasswordVisibility("text");
			setPasswordVisibilityIcon("fas fa-eye");
		} else {
			setPasswordVisibility("password");
			setPasswordVisibilityIcon("fas fa-eye-slash");
		}
	};

	const handleChange = (e) => {
		setUserDetail({
			...userDetail,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<main className="signup__container">
			<div className="signup__div">
				<form
					className="form"
					onSubmit={(e) => {
						e.preventDefault();
						signupHandler(
							userDetail.firstName,
							userDetail.lastName,
							userDetail.email,
							userDetail.password,
							authDispatch,
							navigate,
							location
						);
					}}
				>
					<h2 className="form__name">Signup</h2>
					<div className="input__box">
						<label htmlFor="Email">Email address</label>
						<input
							type="email"
							name="email"
							id="Email"
							className="input"
							required
							onChange={handleChange}
							placeholder="Enter email"
						/>
					</div>
					<div className="input__box">
						<label htmlFor="firstName">First Name</label>
						<input
							id="Username"
							name="firstName"
							className="input"
							required
							onChange={handleChange}
							placeholder="Enter firstName"
						/>
					</div>
					<div className="input__box">
						<label htmlFor="lastName">Last Name</label>
						<input
							type={passwordVisibility}
							id="lastName"
							className="input"
							name="lastName"
							required
							onChange={handleChange}
							placeholder="Enter lastname"
						/>
					</div>
					<div className="input__box">
						<label htmlFor="Password">Password</label>
						<input
							type={passwordVisibility}
							id="password"
							className="input"
							name="password"
							required
							onChange={handleChange}
							autoComplete="on"
							placeholder="Enter Password"
						/>
						<span className="password__icon">
							<i
								className={passwordVisibilityIcon}
								onClick={passwordVisibilityHandler}
							></i>
						</span>
					</div>
					<button type="submit" className="btn btn-primary form-btn">
						Create New Account
					</button>
					<Link to="/login" className="auth__Links">
						👉 Already have an Account
					</Link>
				</form>
			</div>
			{/* <h4 className="error__message">{error}</h4> */}
		</main>
	);
}

export { Signup };
