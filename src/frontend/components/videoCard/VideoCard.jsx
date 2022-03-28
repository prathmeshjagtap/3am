import React from "react";
import "./videoCard.css";
import cardImage from "../../assets/videoImages/demoImage.webp";

function VideoCard() {
	return (
		<div className="video__card">
			<div className="video__card__badge">
				<i className="far fa-heart fa-2x"></i>
			</div>
			<img alt="" src={cardImage} className="video__card-image" />
			<p className="video__description">video card Description</p>
			<p className="video__details">4K Views | 6 Hours Befor</p>
			<div className="video__card__button">
				<i className="fas fa-clock"></i>
				<p>Watch Later</p>
			</div>
		</div>
	);
}

export { VideoCard };
