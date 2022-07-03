import React from "react";
import photo from "../../assets/images/perfil-1.jpg";
import "./style.css";

function Header() {
	return (
		<header className="header container">
			<img className="user-photo" src={photo} alt="Foto de perfil" />
			<div>
				<h1 className="user-name">Olá, Sônia</h1>
				<span className="user-queries">Mais 4 consultas hoje</span>
			</div>
		</header>
	);
}

export default Header;