import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import QueriesList from "./components/QueriesList";

function App() {
	return (
		<div id="container">
			<Header />
			<main>
				<QueriesList />
			</main>
			<Footer />
		</div>
	);
}

export default App;
