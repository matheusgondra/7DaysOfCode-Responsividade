import React from "react";
import "./App.css";
import Header from "./components/Header";
import QueriesList from "./components/QueriesList";

function App() {
	return (
		<div id="container">
			<Header />
			<main>
				<QueriesList />
			</main>
		</div>
	);
}

export default App;
