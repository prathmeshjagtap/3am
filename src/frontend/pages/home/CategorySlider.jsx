import React from "react";
import { actionConstants } from "../../constants";
import { useActionContext, useDataContext } from "../../context";
import "./home.css";

function CategorySlider() {
	const { dataState } = useDataContext();
	const { categoriesData } = dataState;
	const { actionDispatch } = useActionContext();

	return (
		<div className="category__slider">
			<span
				className="chip"
				onClick={() =>
					actionDispatch({
						type: actionConstants.SET_CATEGORY,
						payload: "All",
					})
				}
			>
				All
			</span>
			<div className="category__slider__items">
				{categoriesData.map((item) => {
					return (
						<span
							key={item._id}
							className="chip"
							onClick={() =>
								actionDispatch({
									type: actionConstants.SET_CATEGORY,
									payload: item.categoryName,
								})
							}
						>
							{item.categoryName}
						</span>
					);
				})}
			</div>
		</div>
	);
}

export { CategorySlider };
