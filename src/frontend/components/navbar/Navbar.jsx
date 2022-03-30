import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context";
import { logoutHandler } from "../../services";

function Navbar() {
	const { authState, authDispatch } = useAuthContext();
	const { isAuth } = authState;
	console.log(isAuth);
	const navigate = useNavigate();

	return (
		<nav className="navigation__component">
			<div className="nav">
				<a href="/" className="toggles">
					<i className="fas fa-bars"></i>
				</a>
				<Link className="nav__logo" to="/">
					<p className="nav__logo-image">3am VIBES</p>
				</Link>

				<div className="nav__search">
					<i className="fa fa-search search__icon"></i>
					<input className="input" placeholder="Search" />
				</div>

				<ul className="nav__right">
					{isAuth ? (
						<Link to="/home">
							<button
								className="btn btn-primary btn-main"
								onClick={(e) => logoutHandler(e, authDispatch, navigate)}
							>
								Logout
							</button>
						</Link>
					) : (
						<Link to="/login">
							<button className="btn btn-primary btn-main">Login</button>
						</Link>
					)}
				</ul>
			</div>
			<div className="search__mobile">
				<input className="input" placeholder="Search" />
				<i className="fa fa-search search__icon"></i>
			</div>
		</nav>
	);
}

export { Navbar };
