import React from "react";
import { Link } from "react-router-dom";
import "./asideNavigation.css";

function AsideNavigation() {
	return (
		<aside className="aside__navigation">
			<div className="links__container">
				<Link to="/" className="navigation__link">
					<i className="fas fa-home"></i>Home
				</Link>
				<Link to="/history" className="navigation__link">
					<i className="fas fa-history"></i>History
				</Link>

				<Link to="/liked" className="navigation__link">
					<i className="fas fa-heart"></i>liked
				</Link>
				<Link to="/playlist" className="navigation__link">
					<i className="fas fa-play-circle"></i>PlayList
				</Link>
				<Link to="/watchLater" className="navigation__link">
					<i className="fas fa-clock"></i>Watch Later
				</Link>
			</div>
		</aside>
	);
}

export { AsideNavigation };
