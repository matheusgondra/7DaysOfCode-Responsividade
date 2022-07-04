import React from "react";
import "./style.css";

function FloatingButton() {
	return (
		<div className="floating-button-container">
			<button className="floating-button">
				<div className="vertical"></div>
				<div className="horizontal"></div>
			</button>
		</div>
	);
}

export default FloatingButton;