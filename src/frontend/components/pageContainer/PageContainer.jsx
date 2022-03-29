import React from "react";
import { Navbar } from "../navbar/Navbar";
import { AsideNavigation } from "../asideNavigation/AsideNavigation";
import "./pageContainer.css";

function PageContainer({ page }) {
	return (
		<div>
			<Navbar />
			<div className="main_container">
				<AsideNavigation />
				<div className="page_container">{page}</div>
			</div>
		</div>
	);
}

export { PageContainer };
