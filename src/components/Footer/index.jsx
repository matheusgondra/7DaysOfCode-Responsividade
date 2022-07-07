import React from "react";
import calendarioIcon from "../../assets/images/calendario-icone.svg";
import clientesIcon from "../../assets/images/clientes-icone.svg";
import menuIcon from "../../assets/images/menu-icone.svg";
import relatoriosIcon from "../../assets/images/relatorios-icone.svg";
import FloatingButton from "./components/FloatingButton";
import "./style.css";

function Footer() {
	return (
		<footer className="footer">
			<nav className="navbar">
				<ul className="navbar-menu">
					<li>
						<img className="button-icon" src={calendarioIcon} alt="ícone de calendário" />
						<button className="button on" type="button">
							Consultas
						</button>
					</li>
					<li>
						<img className="button-icon" src={clientesIcon} alt="ícone de pessoa" />
						<button className="button off" type="button">
							Clientes
						</button>
					</li>
					<li>
						<img className="button-icon" src={relatoriosIcon} alt="ícone de gráfico de linhas" />
						<button className="button off" type="button">
							Relátorios
						</button>
					</li>
					<li>
						<img className="button-icon" src={menuIcon} alt="ícone de menu hamburguer" />
						<button className="button off" type="button">
							Menu
						</button>
					</li>
				</ul>
			</nav>
			<FloatingButton />
		</footer>
	);
}

export default Footer;
