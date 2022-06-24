import React, { useState } from "react";
import "./navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useActionContext, useAuthContext } from "../../context";
import { logoutHandler } from "../../services";
import { actionConstants } from "../../constants";

function Navbar() {
	const { authState, authDispatch } = useAuthContext();
	const { isAuth } = authState;
	const {
		actionState: { search },
		actionDispatch,
	} = useActionContext();
	const [searchInput, setSearchInput] = useState("");
	const [navMobile, setNavMobile] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();

	const searchFilter = (value) => {
		if (location.pathname !== "/") {
			navigate("/");
		}
		actionDispatch({
			type: actionConstants.SEARCH_QUERY,
			payload: value,
		});
		setSearchInput(value);
	};

	return (
		<nav className="navigation__component">
			<div className="nav">
				<p className="toggles" onClick={() => setNavMobile(!navMobile)}>
					<i className={` ${navMobile ? "fas fa-times" : "fas fa-bars"}`}></i>
				</p>
				{navMobile ? (
					<div className="mobile__navigation">
						<p
							className="navigation__link__mobile"
							onClick={() => {
								navigate("/");
								setNavMobile(false);
							}}
						>
							<i className="fas fa-home"></i>Home
						</p>
						<p
							className="navigation__link__mobile"
							onClick={() => {
								navigate("/history");
								setNavMobile(false);
							}}
						>
							<i className="fas fa-history"></i>History
						</p>

						<p
							className="navigation__link__mobile"
							onClick={() => {
								navigate("/liked");
								setNavMobile(false);
							}}
						>
							<i className="fas fa-heart"></i>Liked
						</p>
						<p
							className="navigation__link__mobile"
							onClick={() => {
								navigate("/playlist");
								setNavMobile(false);
							}}
						>
							<i className="fas fa-play-circle"></i>PlayList
						</p>
						<p
							className="navigation__link__mobile"
							onClick={() => {
								navigate("/watchLater");
								setNavMobile(false);
							}}
						>
							<i className="fas fa-clock"></i>Watch Later
						</p>
					</div>
				) : null}

				<Link className="nav__logo" to="/">
					<p className="nav__logo-image">3am Vibes</p>
				</Link>

				<div className="nav__search">
					<i
						className="fa fa-search search__icon"
						onClick={() => {
							if (location.pathname !== "/") navigate("/");
							actionDispatch({
								type: actionConstants.SEARCH_QUERY,
								payload: searchInput,
							});
							setSearchInput("");
						}}
					></i>
					<input
						className="input"
						placeholder="Search"
						value={search}
						onChange={(e) => searchFilter(e.target.value)}
					/>
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
				<input
					className="input"
					placeholder="Search"
					value={searchInput}
					onChange={(e) => search(e.target.value)}
				/>
				<i
					className="fa fa-search search__icon"
					onClick={() => {
						if (location.pathname !== "/") navigate("/");
						actionDispatch({
							type: actionConstants.SEARCH_QUERY,
							payload: searchInput,
						});
						setSearchInput("");
					}}
				></i>
			</div>
		</nav>
	);
}

export { Navbar };
