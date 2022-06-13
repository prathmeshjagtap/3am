import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./authForms.css";
import { useAuthContext } from "../../context";
import { loginHandler } from "../../services";
import { useNavigate } from "react-router-dom";

function Login() {
	const navigate = useNavigate();
	const location = useLocation();

	const { authDispatch } = useAuthContext();
	const [passwordVisibility, setPasswordVisibility] = useState("password");
	const [passwordVisibilityIcon, setPasswordVisibilityIcon] =
		useState("fas fa-eye-slash");

	const [userDetail, setUserDetail] = useState({
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
		<div>
			<main className="signup__container">
				<div className="signup__div">
					<form
						className="form"
						onSubmit={(e) =>
							loginHandler(
								e,
								userDetail.email,
								userDetail.password,
								authDispatch,
								navigate,
								location
							)
						}
					>
						<h2 className="form__name">Login</h2>
						<div className="input__box">
							<label htmlFor="Email">
								Email address
								<input
									required
									id="Email"
									className="input"
									placeholder="test@gmail.com"
									name="email"
									onChange={handleChange}
								/>
							</label>
						</div>
						<div className="input__box">
							<label htmlFor="Password">
								Password
								<input
									type={passwordVisibility}
									required
									id="Password"
									className="input"
									placeholder="test@1234"
									name="password"
									onChange={handleChange}
									autoComplete="on"
								/>
								<span className="password__icon">
									<i
										className={passwordVisibilityIcon}
										onClick={passwordVisibilityHandler}
									></i>
								</span>
							</label>
						</div>

						<div className="input__box input__TandC">
							<div>
								<input type="checkbox" id="remberMe" />
								<label htmlFor="remberMe">Remember me</label>
							</div>
							<Link className="forgot__password" to="/">
								Forgot Password
							</Link>
						</div>
						<button type="submit" className="btn btn-primary form-btn">
							Login
						</button>
						<button
							type="button"
							className="btn btn_login__guest "
							onClick={(e) =>
								loginHandler(
									e,
									"test@gmail.com",
									"test@1234",
									authDispatch,
									navigate,
									location
								)
							}
						>
							Login As Guest
						</button>
						<Link to="/signup" className="auth__Links">
							New here 👉 Create New Account
						</Link>
					</form>
				</div>
			</main>
		</div>
	);
}

export { Login };
