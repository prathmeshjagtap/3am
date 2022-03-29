import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
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
					<Link to="/login">
						<button className="btn btn-primary btn-main">Login</button>
					</Link>
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
