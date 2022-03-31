import React from "react";
import { useDataContext } from "../../context";
import "./home.css";

function CategorySlider() {
	const { dataState } = useDataContext();
	const { categoriesData } = dataState;

	return (
		<div className="category__slider">
			<span className="chip">All</span>
			<div className="category__slider__items">
				{categoriesData.map((item) => {
					return (
						<span key={item._id} className="chip">
							{item.categoryName}
						</span>
					);
				})}
			</div>
		</div>
	);
}

export { CategorySlider };
