import React from "react";

function CategorySlider() {
	const categories = ["one", "two", "twent-two", "forty-eight"];
	return (
		<div className="category__slider">
			<div className="category__slider_items">
				{categories.map((item) => {
					return (
						<span key={item} className="chip">
							{item}
						</span>
					);
				})}
			</div>
		</div>
	);
}

export { CategorySlider };
