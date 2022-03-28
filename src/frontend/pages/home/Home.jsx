import React from "react";
import { VideoCard } from "../../components";
import { CategorySlider } from "./CategorySlider";
import "./home.css";

function Home() {
	return (
		<div>
			<CategorySlider />
			<VideoCard />
		</div>
	);
}

export { Home };
